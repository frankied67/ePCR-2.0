<script>
	import { patient, updatePatientSample } from '../stores/patientStore.js';

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
			allergies,
			medications,
			lastOralIntake
		});
	}
</script>

<div class="card mb-4 shadow-sm rounded">
	<div class="card-header bg-info text-white text-center fs-4 fw-bold">Sample Details</div>
	<div class="card-body p-3">
		<div class="mb-3">
			<div class="d-flex justify-content-between">
				<label for="allergies" class="form-label w-50">Allergies</label>
				<div class="input-group w-50">
					<input
						id="allergies"
						type="text"
						class="form-control form-control-sm"
						bind:value={newAllergy}
						placeholder="Enter allergy"
					/>
					<button
						class="btn btn-outline-dark btn-sm"
						on:click={addAllergy}
						aria-label="Add allergy"
					>
						<i class="bi bi-plus-circle"></i> Add
					</button>
				</div>
			</div>
			{#if allergies.length > 0}
				<ul class="list-group list-group-flush">
					{#each allergies as allergy, index}
						<li class="list-group-item d-flex justify-content-between align-items-center p-1">
							{allergy}
							<button
								class="btn btn-danger btn-sm"
								on:click={() => removeAllergy(index)}
								aria-label="Remove allergy"
							>
								<i class="bi bi-trash"></i>Remove
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
		<div class="mb-3">
			<div class="d-flex justify-content-between">
				<label for="medications" class="form-label w-50">Medications</label>
				<div class="input-group w-50">
					<input
						id="medications"
						type="text"
						class="form-control form-control-sm"
						bind:value={newMedication}
						placeholder="Enter medication"
					/>
					<button
						class="btn btn-outline-dark btn-sm"
						on:click={addMedication}
						aria-label="Add medication"
					>
						<i class="bi bi-plus-circle"></i> Add
					</button>
				</div>
			</div>
			{#if medications.length > 0}
				<ul class="list-group list-group-flush">
					{#each medications as medication, index}
						<li class="list-group-item d-flex justify-content-between align-items-center p-1">
							{medication}
							<button
								class="btn btn-danger btn-sm"
								on:click={() => removeMedication(index)}
								aria-label="Remove medication"
							>
								<i class="bi bi-trash"></i>Remove
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
		<div class="mb-3">
			<div class="d-flex justify-content-between">
				<label for="lastOralIntake" class="form-label w-50">Last Oral Intake</label>
				<textarea
					id="lastOralIntake"
					class="form-control form-control-sm w-50"
					rows="2"
					bind:value={lastOralIntake}
					on:change={saveSample}
					placeholder="Enter details of last oral intake"
				></textarea>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		border-radius: 8px;
	}

	.card-header {
		background-color: #17a2b8;
		text-align: center;
		border-radius: 8px 8px 0 0;
		padding: 1rem;
	}

	.form-label {
		font-weight: bold;
		color: #007bff;
	}

	.form-control-sm {
		font-size: 0.875rem;
		padding: 0.375rem 0.75rem;
	}

	.input-group {
		margin-bottom: 0.5rem;
	}

	.input-group .btn {
		font-size: 0.875rem;
		padding: 0.375rem;
	}

	.btn-outline-dark {
		color: #343a40;
		border-color: #343a40;
	}

	.btn-outline-dark:hover {
		background-color: #343a40;
		color: white;
	}

	.list-group-item {
		font-size: 0.875rem;
		padding: 0.25rem 0.75rem;
	}

	.btn-danger {
		background-color: #dc3545;
		border-color: #dc3545;
		padding: 0.25rem 0.5rem;
	}

	.btn-danger:hover {
		background-color: #c82333;
	}

	.card-body {
		padding: 0.75rem;
	}
</style>
