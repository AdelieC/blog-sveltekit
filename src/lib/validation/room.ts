export type CreateRoomErrors = {
	name?: string;
	description?: string;
};

export default (name: string | null, description: string | null) => {
	const errors: CreateRoomErrors = {};

	if (!name) {
		errors.name = 'Name is required...';
	}

	if (name && name?.length < 3) {
		errors.name = "New room's name must be at least 3 characters...";
	}

	if (description && description.length < 5) {
		errors.description = 'Description must be at least 5 characters...';
	}

	return errors;
};
