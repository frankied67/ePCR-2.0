<script>
	import Patient from '$lib/ui/Patient.svelte';
	import Vitals from '$lib/ui/Vitals.svelte';
	import Sepsis from '$lib/ui/Sepsis.svelte';
	import { patient, updatePatientVitals } from '../../lib/stores/patientStore';

	function addVitals(newVitals) {
		updatePatientVitals(newVitals);
	}
</script>

<div class="container mt-4">
	<Patient />

	<Sepsis />

	<div class="mt-4">
		<div class="content">
			<Vitals on:vitalsUpdated={addVitals} />
		</div>
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
