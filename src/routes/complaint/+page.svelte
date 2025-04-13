<script>
	import Patient from '$lib/ui/Patient.svelte';
	import ABC from '$lib/ui/ABC.svelte';
	import Sepsis from '$lib/ui/Sepsis.svelte';
	import Choking from '$lib/ui/Choking.svelte';
	import ChokingSevere from '$lib/ui/ChokingSevere.svelte';

	import { patient } from '$lib/stores/patientStore';

	import { onMount } from 'svelte';

	onMount(() => {
		const content = document.querySelector('.content');
		content.scrollTop = content.scrollHeight;
	});
</script>

<div class="page-container">
	<div class="content">
		<Patient />
		<Sepsis />
		<div class="mt-4">
			<ABC />
		</div>

		{#if $patient.airway === 'no'}
			<div class="mt-4">
				<Choking />
			</div>
		{/if}

		{#if $patient.chokingSeverity === 'severe'}
			<div class="mt-4">
				<ChokingSevere />
			</div>
		{/if}
	</div>
</div>

<style>
	.page-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.content {
		flex-grow: 1;
		overflow-y: auto;
		padding: 20px;
		max-width: 960px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
