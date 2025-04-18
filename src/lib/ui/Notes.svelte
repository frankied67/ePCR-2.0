<script>
	import { patient, updatePatientNotes } from '$lib/stores/patientStore';

	let notes = $patient.notes;

	function updateNotes() {
		updatePatientNotes(notes);
	}
</script>

<div class="card mb-4 shadow-sm border-light">
	<div class="card-header bg-info text-white text-center fs-4 fw-bold">Notes</div>
	<div class="card-body bg-light">
		<textarea
			bind:value={notes}
			class="form-control"
			rows="5"
			placeholder="Enter any important notes about the patient..."
			on:input={updateNotes}
		></textarea>
	</div>
</div>

<style>
	.card {
		border-radius: 10px;
	}
	.card-header {
		border-radius: 10px 10px 0 0;
	}
	.card-body {
		padding: 1.25rem;
	}
	.form-control {
		font-size: 1rem;
		border-radius: 8px;
	}
</style>
