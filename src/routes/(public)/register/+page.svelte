<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import EmailInput from '$lib/components/Form/EmailInput.svelte';
	import PasswordInput from '$lib/components/Form/PasswordInput.svelte';
	import TextInput from '$lib/components/Form/TextInput.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let email: string = form?.email ?? '';
	let password: string = '';
	let password_confirm: string = '';
	let alias: string = form?.alias ?? '';
	let first_name: string = form?.first_name ?? '';
	let last_name: string = form?.last_name ?? '';
</script>

<h1>Register</h1>
<form action="?/register" method="post">
	<EmailInput
		name="email"
		placeholder="Your email"
		bind:value={email}
		description="Email address you will use to log in"
		label="Your email"
	/>
	<PasswordInput bind:value={password} error={form?.errors?.password ?? ''} />
	<PasswordInput
		name="password_confirm"
		bind:value={password_confirm}
		description="Confirm your password"
		label="Confirm password"
		error={form?.errors?.password_confirm ?? ''}
	/>
	<TextInput
		placeholder="Your alias"
		name="alias"
		bind:value={alias}
		description="The name that will be displayed to other users"
		label="Alias"
		error={form?.errors?.alias ?? ''}
	/>
	<TextInput
		placeholder="Your first name"
		name="first_name"
		bind:value={first_name}
		description="Your first name will not be displayed to other users"
		label="First name"
		error={form?.errors?.first_name ?? ''}
	/>
	<TextInput
		placeholder="Your last name"
		name="last_name"
		bind:value={last_name}
		description="Your last name will not be displayed to other users"
		label="Last name"
		error={form?.errors?.last_name ?? ''}
	/>
	<button type="submit" class="btn btn-primary">Register</button>
</form>
