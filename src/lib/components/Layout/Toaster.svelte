<script lang="ts">
	import { toasts } from '$lib/stores/toasts';
	import { fade } from 'svelte/transition';
</script>

{#if $toasts?.length}
	<div class="toast toast-bottom w-full z-50">
		{#each $toasts as toast}
			<div role="alert" class={`alert shadow-lg ${toast.type}`} transition:fade>
				{toast.message}
			</div>
		{/each}
	</div>
{/if}
