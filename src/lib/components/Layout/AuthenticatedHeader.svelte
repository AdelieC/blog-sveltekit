<script lang="ts">
	import Menu from '$lib/components/Icon/Menu.svelte';
</script>

<header class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label class="btn btn-ghost lg:hidden" for="">
				<Menu />
			</label>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/">Drafts</a></li>

				<li><a href="/">Search</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">My blog</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Drafts</a></li>
			<li><a href="/">Search</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/posts/new" class="btn">New post</a>
	</div>
</header>
