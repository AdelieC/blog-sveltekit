<script lang="ts">
	export let title: string;
	export let author;
	export let createdAt: string;
	export let updatedAt: string;
	export let text: string;
</script>

<h1>{title}</h1>
<h2>by {author.alias}</h2>
<p>{text}</p>
<p>Created at {createdAt}</p>
<p>Updated at {updatedAt}</p>
