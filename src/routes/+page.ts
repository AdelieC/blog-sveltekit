import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ parent }) => {
	const { supabase, session } = await parent();

	const getPosts = async () => {
		const { data, error } = await supabase
			.from('posts')
			.select('id, author_id(id, alias), title, text, created_at, updated_at, status')
			.eq('status', 'public');
		if (error) console.error('Post error', error);

		return data ?? [];
	};

	return {
		posts: getPosts()
	};
}) satisfies PageLoad;
