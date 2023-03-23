export type InviteErrors = {
	guestId?: string;
	message?: string;
};

export default (guestId: string, message: string) => {
	const errors: InviteErrors = {};

	if (!guestId || guestId.length < 14) {
		errors.guestId = 'Please select a valid guest...';
	}

	if (message && message.length < 4) {
		errors.message = 'Please enter a real message...';
	}

	return errors;
};
