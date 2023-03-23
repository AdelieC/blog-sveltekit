<script lang="ts">
	import Checked from '../Icon/Checked.svelte';
	import Unchecked from '../Icon/Unchecked.svelte';

	export let group = '';
	export let name: string;
	export let value: string;
	export let label: string;
	export let description = '';
	export let error = '';
</script>

<div class="flex flex-col justify-start gap-2">
	<label for={name} class="flex gap-4 items-center">
		<input type="checkbox" id={name} bind:group {value} class="hidden" />
		<span class="text-xl">
			{#if group === value}
				<Checked />
			{:else}
				<Unchecked />
			{/if}
		</span>
		<span>{label}</span>
	</label>
	{#if error}
		<p class="text-red-500">{error}</p>
	{:else if description}
		<p>{description}</p>
	{/if}
</div>
