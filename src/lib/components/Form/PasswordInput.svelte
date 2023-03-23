<script lang="ts">
	import InputWrapper from './InputWrapper.svelte';

	export let value = '';
	export let label = 'Your password';
	export let name = 'password';
	export let description =
		'>= 8 characters, with at least 1 uppercase, 1 lowercase, 1 number, 1 special char';
	export let error = '';
	export let disabled = false;
</script>

<InputWrapper {description} {error} required={true} {label} {name}>
	<input
		type="password"
		class="input input-bordered"
		{name}
		bind:value
		placeholder="••••••••"
		required
		{disabled}
	/>
</InputWrapper>
