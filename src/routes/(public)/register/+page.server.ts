import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import validate from '$lib/validation/register';
import type { RegisterErrors } from '$lib/validation/register';

export const actions = {
	register: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const password_confirm = formData.get('password_confirm') as string;
		const alias = formData.get('alias') as string;
		const first_name = formData.get('first_name') as string;
		const last_name = formData.get('last_name') as string;

		const errors: RegisterErrors = validate(
			email,
			password,
			password_confirm,
			alias,
			first_name,
			last_name
		);

		if (Object.entries(errors).length > 0) {
			return fail(400, { errors, email, alias, first_name, last_name });
		}

		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					alias,
					first_name,
					last_name
				}
			}
		});

		if (error) {
			console.error('error register', error);
			return fail(500, {
				email,
				alias,
				first_name,
				last_name,
				error: 'Registration failed...'
			});
		}

		throw redirect(303, 'register/success');
	}
} satisfies Actions;
