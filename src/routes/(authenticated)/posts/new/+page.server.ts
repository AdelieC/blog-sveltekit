import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	post: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const text = formData.get('text') as string;
		const isPublic = formData.get('isPublic') as string;

		if (!title) return fail(400, { errors: { title: 'Title is required' }, title, text, isPublic });
		if (!text) return fail(400, { errors: { text: 'Text is required' }, title, text, isPublic });

		const { data, error } = await supabase
			.from('posts')
			.insert({
				title,
				text,
				//status: isPublic === 'true' ? 'public' : 'draft',
				author_id: session.user.id
			})
			.select()
			.single();
		if (error) {
			console.error('error post', error);
			return fail(500, {
				title,
				text,
				isPublic,
				error: 'Could not create post...'
			});
		}
		return {
			message: 'Post has been successfully created !'
		};
	}
} satisfies Actions;
