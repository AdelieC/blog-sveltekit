<script lang="ts">
	import Asterisk from '../Icon/Asterisk.svelte';

	export let label: string;
	export let name: string;
	export let required = true;
	export let description: string;
	export let error = '';
</script>

<div class="form-control">
	<label class="label justify-start" for={name}>
		{label}
		{#if required}
			<span class="text-2xl text-warning">
				<Asterisk />
			</span>
		{/if}
	</label>
	<slot />
	{#if !error}
		{#if description}<p class="label-text-alt pl-1">{description}</p>{/if}
	{:else}
		<p class="label-text-alt text-error pl-1">{error}</p>
	{/if}
</div>
