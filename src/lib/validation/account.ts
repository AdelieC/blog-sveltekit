export type EditAccountErrors = {
	alias?: string;
	first_name?: string;
	last_name?: string;
};

export default (alias: string | null, firstName: string | null, lastName: string | null) => {
	const errors: EditAccountErrors = {};

	if (!alias) {
		errors.alias = 'Alias is required...';
	}

	if (alias && alias?.length < 4) {
		errors.alias = 'Your alias should at least be 4 characters...';
	}

	if (!firstName) {
		errors.first_name = 'Your first name is required...';
	}

	if (firstName && firstName.length < 2) {
		errors.first_name = 'Invalid first name...';
	}

	if (!lastName) {
		errors.last_name = 'Your last name is required...';
	}

	if (lastName && lastName.length < 2) {
		errors.last_name = 'Invalid last name...';
	}

	return errors;
};
