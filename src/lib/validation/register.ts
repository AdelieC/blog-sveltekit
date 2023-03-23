export type RegisterErrors = {
	email?: string;
	password?: string;
	password_confirm?: string;
	alias?: string;
	first_name?: string;
	last_name?: string;
};

export default (
	email: string | null,
	password: string | null,
	passwordConfirm: string | null,
	alias: string | null,
	firstName: string | null,
	lastName: string | null
) => {
	const errors: RegisterErrors = {};

	// Email
	if (!email) {
		errors.email = 'Email is required...';
	}

	if (!email?.includes('@')) {
		errors.email = 'Invalid email...';
	}

	// Password
	if (!password) {
		errors.password = 'Password is required...';
	}

	if (password && password.length < 8) {
		errors.password = 'Password should at least be 8 characters...';
	}

	// Password confirm
	if (!passwordConfirm) {
		errors.password_confirm = 'Please confirm your password...';
	}

	if (passwordConfirm && passwordConfirm !== password) {
		errors.password_confirm = 'Password confirm must match password...';
	}

	// Alias
	if (!alias) {
		errors.alias = 'Alias is required...';
	}
	if (alias && alias?.length < 4) {
		errors.alias = 'Your alias should at least be 4 characters...';
	}

	// First name
	if (!firstName) {
		errors.first_name = 'Your first name is required...';
	}

	if (firstName && firstName.length < 2) {
		errors.first_name = 'Invalid first name...';
	}

	// Last name
	if (!lastName) {
		errors.last_name = 'Your last name is required...';
	}

	if (lastName && lastName.length < 2) {
		errors.last_name = 'Invalid last name...';
	}

	return errors;
};
