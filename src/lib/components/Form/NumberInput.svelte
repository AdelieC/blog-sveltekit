<script lang="ts">
	import InputWrapper from './InputWrapper.svelte';

	export let value = 0;
	export let label: string;
	export let placeholder: string;
	export let name: string;
	export let required = true;
	export let description: string;
	export let error = '';
	export let disabled = false;
</script>

<InputWrapper {description} {error} {required} {label} {name}>
	<input
		type="number"
		class="input input-bordered"
		{name}
		bind:value
		{placeholder}
		{required}
		{disabled}
	/>
</InputWrapper>
