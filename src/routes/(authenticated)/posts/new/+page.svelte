<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { ActionData } from './$types';
	import { toast } from '$lib/stores/toasts';
	import TextInput from '$lib/components/Form/TextInput.svelte';
	import Textarea from '$lib/components/Form/Textarea.svelte';
	import CheckBox from '$lib/components/Form/CheckBox.svelte';

	let isLoading = false;
	let title = '';
	let text = '';
	let form: ActionData;
	let isPublic = false;

	const handleSubmit: SubmitFunction = ({ data, cancel }) => {
		isLoading = true;

		return async ({ result, update }) => {
			isLoading = false;
			if (result.type === 'failure') {
				if (result?.data?.error) toast(result.data.error, 'alert-error');
			}
			if (result.type === 'success') {
				if (result?.data?.message) toast(result.data.message, 'alert-success');
			}
			await applyAction(result);
		};
	};
</script>

<h1>New post</h1>
<form
	action="?/post"
	method="post"
	use:enhance={handleSubmit}
	class="max-w-md w-full bg-base-200 p-8 rounded-xl shadow-xl gap-4 flex flex-col"
>
	<TextInput
		placeholder="Title"
		name="title"
		bind:value={title}
		description="Your post's title"
		label="Title"
		required
		error={form?.errors?.title ?? ''}
	/>
	<Textarea
		bind:value={text}
		error={form?.errors?.text ?? ''}
		label="Your text"
		description="Text of your new post"
		name="text"
		placeholder="Enter your text here"
	/>
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Make public ?</span>
			<input type="checkbox" class="toggle" bind:checked={isPublic} />
		</label>
	</div>
	<button type="submit" class="btn btn-primary">Save</button>
</form>
