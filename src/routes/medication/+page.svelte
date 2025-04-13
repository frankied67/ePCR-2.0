<script>
	import Patient from '$lib/ui/Patient.svelte';
	import Sepsis from '$lib/ui/Sepsis.svelte';
	import Sample from '$lib/ui/Sample.svelte';
	import Medication from '$lib/ui/Medication.svelte';
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
		<Sepsis />
		<Sample />
		<Medication />
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
