<script>
	import { loggedInUser } from '$lib/stores/userStore';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import ListPatients from '$lib/ui/ListPatients.svelte';

	$: {
		if (!$loggedInUser) {
			goto('/');
		} else if ($loggedInUser.role !== 'admin') {
			goto('/');
		}
	}

	onMount(() => {
		const content = document.querySelector('.content');
		if (content) {
			content.scrollTop = content.scrollHeight;
		}
	});
</script>

<div class="container my-4">
	<div class="content">
		<h2>Admin page 2</h2>

		<a href="/admin" class="btn btn-primary me-2">Back to Admin Panel</a>

		<ListPatients />
	</div>
</div>

<style>
	.content {
		overflow-y: auto;
		max-width: 960px;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 20px;
	}
</style>
