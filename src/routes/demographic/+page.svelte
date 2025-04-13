<script>
	import Patient from '$lib/ui/Patient.svelte';
	import Address from '$lib/ui/Address.svelte';
	import NOK from '$lib/ui/NOK.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const content = document.querySelector('.content');
		if (content) {
			content.scrollTop = content.scrollHeight;
		}
	});
</script>

<div class="container mt-4">
	<div class="content">
		<Patient />
		<Address />
		<NOK />
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
