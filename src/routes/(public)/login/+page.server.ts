import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import validate from '$lib/validation/login';
import type { LoginErrors } from '$lib/validation/login';

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const errors: LoginErrors = validate(email, password);
		if (Object.entries(errors).length > 0) {
			return fail(400, { errors, email });
		}

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			return fail(401, {
				email,
				error: 'Invalid credentials...'
			});
		}
		throw redirect(303, '/');
	}
} satisfies Actions;
