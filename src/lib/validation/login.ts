export type LoginErrors = {
	email?: string;
	password?: string;
};

export default (email: string, password: string) => {
	const errors: LoginErrors = {};

	if (!email) {
		errors.email = 'Email is required...';
	}

	if (!email.includes('@')) {
		errors.email = 'Invalid email...';
	}

	if (!password) {
		errors.password = 'Password is required...';
	}

	if (password.length < 8) {
		errors.password = 'Password should at least be 8 characters...';
	}

	return errors;
};
