<script>
	import { patient, updatePatientSample } from '../stores/patientStore.js';
	let symptoms = '';
	let lastOralIntake = '';
	let allergies = [];
	let newAllergy = '';
	let medications = [];
	let newMedication = '';

	function addAllergy() {
		if (newAllergy.trim()) {
			allergies = [...allergies, newAllergy.trim()];
			newAllergy = '';
			saveSample();
		}
	}

	function removeAllergy(index) {
		allergies = allergies.filter((_, i) => i !== index);
		saveSample();
	}

	function addMedication() {
		if (newMedication.trim()) {
			medications = [...medications, newMedication.trim()];
			newMedication = '';
			saveSample();
		}
	}

	function removeMedication(index) {
		medications = medications.filter((_, i) => i !== index);
		saveSample();
	}

	function saveSample() {
		updatePatientSample({
			symptoms,
			allergies,
			medications,
			lastOralIntake
		});
	}
</script>

<div class="card mb-4">
	<div class="card-header bg-primary text-white">SAMPLE</div>
	<div class="card-body">
		<div class="mb-3">
			<label class="form-label">Symptoms</label>
			<input type="text" class="form-control" bind:value={symptoms} on:change={saveSample} />
		</div>

		<div class="mb-3">
			<label class="form-label">Allergies</label>
			<div class="input-group mb-2">
				<input type="text" class="form-control" bind:value={newAllergy} placeholder="Add allergy" />
				<button class="btn btn-secondary" on:click={addAllergy}>Add</button>
			</div>
			<ul class="list-group">
				{#each allergies as allergy, index}
					<li class="list-group-item d-flex justify-content-between align-items-center">
						{allergy}
						<button class="btn btn-sm btn-danger" on:click={() => removeAllergy(index)}>Remove</button>
					</li>
				{/each}
			</ul>
		</div>

		<div class="mb-3">
			<label class="form-label">Medications</label>
			<div class="input-group mb-2">
				<input type="text" class="form-control" bind:value={newMedication} placeholder="Add medication" />
				<button class="btn btn-secondary" on:click={addMedication}>Add</button>
			</div>
			<ul class="list-group">
				{#each medications as medication, index}
					<li class="list-group-item d-flex justify-content-between align-items-center">
						{medication}
						<button class="btn btn-sm btn-danger" on:click={() => removeMedication(index)}>Remove</button>
					</li>
				{/each}
			</ul>
		</div>

		<div class="mb-3">
			<label class="form-label">Last Oral Intake</label>
			<input type="text" class="form-control" bind:value={lastOralIntake} on:change={saveSample} />
		</div>
	</div>
</div>
