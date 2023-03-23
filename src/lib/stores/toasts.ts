import { writable } from 'svelte/store';

type Toast = {
	message: string;
	type: string;
};

export let toasts = writable<Toast[]>([]);

export const toast = (message: string, type: string) => {
	toasts.update((state) => [{ message, type }, ...state]);
	setTimeout(removeToast, 5000);
};

const removeToast = () => {
	toasts.update((state) => {
		return [...state.slice(0, state.length - 1)];
	});
};
