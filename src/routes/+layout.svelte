<script>
	import '$lib/assets/styles/main.css';
	import Layout from '$lib/components/Layout/index.svelte';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Toaster from '$lib/components/Layout/Toaster.svelte';

	export let data;

	$: ({ supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Layout>
	<slot />
</Layout>
<Toaster />
