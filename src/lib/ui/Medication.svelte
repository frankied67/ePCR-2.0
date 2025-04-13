<script>
	import {
		patient,
		addAdministeredMedication,
		deleteAdministeredMedication
	} from '../stores/patientStore';

	let time = '';
	let medication = '';
	let dose = '';
	let route = '';

	const routes = ['PO', 'Intravenous', 'Intramuscular', 'Inhaled', 'Sublingual', 'PR'];

	const handleSubmit = () => {
		if (time && medication && dose && route) {
			addAdministeredMedication({ time, medication, dose, route });
			time = '';
			medication = '';
			dose = '';
			route = '';
		} else {
			alert('Please fill in all fields.');
		}
	};

	const handleDelete = (index) => {
		deleteAdministeredMedication(index);
	};
</script>

<div class="card mb-4 shadow-sm border-light">
	<div class="card-header bg-info text-white text-center fs-4 fw-bold">
		Administered Medications
	</div>
	<div class="card-body bg-light">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="row g-3">
				<div class="col-12 col-md-3">
					<label class="form-label" for="medication-time">Time (24hr)</label>
					<input
						type="time"
						id="medication-time"
						bind:value={time}
						class="form-control form-control-sm"
						required
					/>
				</div>
				<div class="col-12 col-md-3">
					<label class="form-label" for="medication-name">Medication</label>
					<input
						type="text"
						id="medication-name"
						bind:value={medication}
						class="form-control form-control-sm"
						required
					/>
				</div>
				<div class="col-12 col-md-3">
					<label class="form-label" for="medication-dose">Dose (mg)</label>
					<input
						type="number"
						id="medication-dose"
						bind:value={dose}
						class="form-control form-control-sm"
						required
					/>
				</div>
				<div class="col-12 col-md-3">
					<label class="form-label" for="medication-route">Route</label>
					<select
						id="medication-route"
						bind:value={route}
						class="form-control form-control-sm"
						required
					>
						{#each routes as r}
							<option value={r}>{r}</option>
						{/each}
					</select>
				</div>
			</div>
			<button type="submit" class="btn btn-primary mt-3">Submit Medication</button>
		</form>

		<div class="mt-4">
			<h5 class="text-center">Administered Medications:</h5>
			<ul class="list-group">
				{#each $patient.administeredMedications as medication, index}
					<li class="list-group-item d-flex justify-content-between align-items-center">
						<span><strong>{medication.time}</strong></span>
						<span>{medication.medication}</span>
						<span>{medication.dose} mg</span>
						<span>{medication.route}</span>
						<button class="btn btn-danger btn-sm" on:click={() => handleDelete(index)}
							>Delete</button
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.card {
		border-radius: 10px;
	}

	.card-header {
		border-radius: 10px 10px 0 0;
	}

	.form-label {
		font-weight: bold;
		color: #007bff;
	}

	.card.mb-4 {
		margin-bottom: 2rem;
	}

	.btn-primary {
		background-color: #007bff;
		border: none;
	}

	.btn-primary:hover {
		background-color: #0056b3;
	}

	.btn-danger {
		background-color: #dc3545;
		border: none;
	}

	.btn-danger:hover {
		background-color: #c82333;
	}

	.list-group-item {
		border-radius: 10px;
	}

	.form-control-sm {
		font-size: 0.875rem;
		padding: 0.375rem;
	}
</style>
