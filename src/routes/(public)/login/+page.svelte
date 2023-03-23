<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { ActionData } from './$types';
	import { toast } from '$lib/stores/toasts';
	import EmailInput from '$lib/components/Form/EmailInput.svelte';
	import PasswordInput from '$lib/components/Form/PasswordInput.svelte';

	let isLoading = false;
	let email = '';
	let password = '';
	let form: ActionData;

	const handleSubmit: SubmitFunction = ({ data, cancel }) => {
		isLoading = true;

		return async ({ result, update }) => {
			isLoading = false;
			if (result.type === 'failure') {
				if (result?.data?.error) toast(result.data.error, 'alert-error');
			}
			if (result.type === 'success') {
				if (result?.data?.message) toast(result.data.message, 'alert-success');
			}
			await applyAction(result);
		};
	};
</script>

<h1>Login</h1>
<form
	action="?/login"
	method="post"
	use:enhance={handleSubmit}
	class="max-w-lg bg-base-200 p-8 rounded-xl shadow-xl"
>
	<EmailInput
		placeholder="Your email"
		name="email"
		bind:value={email}
		description="Email address linked to your account"
		label="Your email"
		required
		error={form?.errors?.email ?? ''}
	/>
	<PasswordInput bind:value={password} error={form?.errors?.password ?? ''} />
	<button type="submit" class="btn btn-primary">Login</button>
</form>
