<script lang="ts">
	export let title: string;
	export let author;
	export let createdAt: string;
	export let updatedAt: string;
	export let text: string;
</script>

<article class="max-w-xs rounded-full shadow-xl p-4">
	<h3>{title}</h3>
	<p class="font-bold">by {author.alias}</p>
	<p>{text.slice(0, 100)}...</p>
	<p>Created at {createdAt}</p>
</article>
