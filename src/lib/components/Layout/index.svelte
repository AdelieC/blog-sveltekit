<script lang="ts">
	import AuthenticatedHeader from '$lib/components/Layout/AuthenticatedHeader.svelte';
	import PublicHeader from '$lib/components/Layout/PublicHeader.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.data?.session}
	<AuthenticatedHeader />
{:else}
	<PublicHeader />
{/if}
<main
	class="grow flex flex-col p-8 lg:px-16 lg:py-10 xl:px-20 xl:py-10 gap-8 lg:gap-10 justify-center items-center"
>
	<slot />
</main>
<Footer />
