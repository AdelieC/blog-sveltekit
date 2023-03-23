<script lang="ts">
	import InputWrapper from './InputWrapper.svelte';

	export let value = '';
	export let label: string;
	export let placeholder: string;
	export let name = '';
	export let required = true;
	export let description: string;
	export let error = '';
	export let disabled = false;
</script>

<InputWrapper {description} {error} {required} {label} {name}>
	<input
		type="email"
		class="input input-bordered"
		{name}
		bind:value
		{placeholder}
		{required}
		{disabled}
	/>
</InputWrapper>
