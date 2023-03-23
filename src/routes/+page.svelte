<script lang="ts">
	import type { PageDataLoad } from './types';
	import Thumbnail from '$lib/components/Post/Thumbnail.svelte';
	export let data: PageDataLoad;
</script>

<h1>All public posts</h1>
{#if data?.posts?.length}
	<ul>
		{#each data?.posts as post}
			<Thumbnail
				title={post.title}
				text={post.text}
				author={post.author_id}
				createdAt={post.created_at}
				updatedAt={post.updated_at}
			/>
		{/each}
	</ul>
{:else}
	<p>No posts found</p>
{/if}
