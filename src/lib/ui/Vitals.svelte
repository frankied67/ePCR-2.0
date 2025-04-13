<script>
	import { patient, updatePatientVitals } from '../stores/patientStore';
	import { derived } from 'svelte/store';

	let time = '';
	let heartRate = '';
	let ecgRythm = '';
	let breathingRate = '';
	let systolicBP = '';
	let diastolicBP = '';
	let bloodSugar = '';
	let temperature = '';
	let oxygenSaturation = '';
	let eyes = '';
	let verbal = '';
	let motor = '';
	let gcs = '';
	let acuteConfusion = false;

	function calculateGCS() {
		gcs = (Number(eyes) || 0) + (Number(verbal) || 0) + (Number(motor) || 0);
	}

	function submitVitals() {
		const newVitals = {
			time,
			heartRate,
			ecgRythm,
			breathingRate,
			systolicBP,
			diastolicBP,
			bloodSugar,
			temperature,
			oxygenSaturation,
			gcs,
			acuteConfusion
		};

		updatePatientVitals(newVitals);

		time =
			heartRate =
			ecgRythm =
			breathingRate =
			systolicBP =
			diastolicBP =
			bloodSugar =
			temperature =
			oxygenSaturation =
				'';
		eyes = verbal = motor = gcs = '';
		acuteConfusion = false;
	}

	let vitalsList = derived(patient, ($patient) => $patient.vitals || []);
</script>

<div class="card mb-4 shadow-sm border-light">
	<div class="card-header bg-info text-white text-center fs-4 fw-bold">Vital Signs</div>
	<div class="card-body bg-light">
		<div class="row g-3 mb-3">
			<div class="col-md-4">
				<label class="form-label" for="time">Time (24h format)</label>
				<input id="time" type="time" class="form-control form-control-sm" bind:value={time} />
			</div>
			<div class="col-md-4">
				<label class="form-label" for="heartRate">Heart Rate</label>
				<input
					id="heartRate"
					type="number"
					class="form-control form-control-sm"
					bind:value={heartRate}
				/>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="ecgRythm">ECG Rhythm</label>
				<input
					id="ecgRythm"
					type="text"
					class="form-control form-control-sm"
					bind:value={ecgRythm}
				/>
			</div>
		</div>
		<div class="row g-3 mb-3">
			<div class="col-md-4">
				<label class="form-label" for="breathingRate">Breathing Rate</label>
				<input
					id="breathingRate"
					type="number"
					class="form-control form-control-sm"
					bind:value={breathingRate}
				/>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="systolicBP">Blood Pressure</label>
				<div class="d-flex">
					<input
						id="systolicBP"
						type="number"
						class="form-control form-control-sm me-2"
						placeholder="Systolic"
						bind:value={systolicBP}
					/>
					<input
						id="diastolicBP"
						type="number"
						class="form-control form-control-sm"
						placeholder="Diastolic"
						bind:value={diastolicBP}
					/>
				</div>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="bloodSugar">Blood Sugar (mmol/L)</label>
				<input
					id="bloodSugar"
					type="number"
					class="form-control form-control-sm"
					bind:value={bloodSugar}
					step="0.1"
				/>
			</div>
		</div>
		<div class="row g-3 mb-3">
			<div class="col-md-4">
				<label class="form-label" for="temperature">Temperature (°C)</label>
				<input
					id="temperature"
					type="number"
					class="form-control form-control-sm"
					step="0.1"
					bind:value={temperature}
				/>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="oxygenSaturation">Oxygen Saturation (%)</label>
				<input
					id="oxygenSaturation"
					type="number"
					class="form-control form-control-sm"
					bind:value={oxygenSaturation}
				/>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="acuteConfusion">Acute Confusion</label>
				<input
					id="acuteConfusion"
					type="checkbox"
					class="form-check-input"
					bind:checked={acuteConfusion}
				/>
			</div>
		</div>
		<div class="row g-3 mb-3">
			<div class="col-md-4">
				<label class="form-label" for="eyes">GCS - Eyes</label>
				<input
					id="eyes"
					type="number"
					class="form-control form-control-sm"
					placeholder="Eyes (1-4)"
					min="1"
					max="4"
					bind:value={eyes}
					on:input={calculateGCS}
				/>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="verbal">GCS - Verbal</label>
				<input
					id="verbal"
					type="number"
					class="form-control form-control-sm"
					placeholder="Verbal (1-5)"
					min="1"
					max="5"
					bind:value={verbal}
					on:input={calculateGCS}
				/>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="motor">GCS - Motor</label>
				<input
					id="motor"
					type="number"
					class="form-control form-control-sm"
					placeholder="Motor (1-6)"
					min="1"
					max="6"
					bind:value={motor}
					on:input={calculateGCS}
				/>
			</div>
			<div class="col-md-4">
				<label class="form-label" for="gcs">GCS Total</label>
				<input
					id="gcs"
					type="text"
					class="form-control form-control-sm"
					readonly
					bind:value={gcs}
				/>
			</div>
		</div>
		<button class="btn btn-success" on:click={submitVitals}>Submit</button>
	</div>
</div>

<h3 class="mt-5 mb-4 p-3 bg-light text-dark">Recorded Vital Signs</h3>
<ul class="list-group">
	{#each $vitalsList as vital}
		<li class="list-group-item mb-2 p-3 border rounded">
			<div class="row">
				<div class="col-2"><strong>Time:</strong> {vital.time}</div>
				<div class="col-2"><strong>HR:</strong> {vital.heartRate}</div>
				<div class="col-2"><strong>BP:</strong> {vital.systolicBP}/{vital.diastolicBP}</div>
				<div class="col-2"><strong>Temp:</strong> {vital.temperature} °C</div>
				<div class="col-2"><strong>SpO2:</strong> {vital.oxygenSaturation} %</div>
				<div class="col-2"><strong>GCS:</strong> {vital.gcs}</div>
			</div>
			<div class="row mt-2">
				<div class="col-2"><strong>Blood Sugar:</strong> {vital.bloodSugar} mmol/L</div>
				<div class="col-2">
					<strong>Acute Confusion:</strong>
					{vital.acuteConfusion ? 'Yes' : 'No'}
				</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	.card {
		border-radius: 10px;
	}

	.card-header {
		border-radius: 10px 10px 0 0;
	}

	.form-label {
		font-weight: bold;
		color: #212529;
	}

	.form-control-sm {
		padding: 0.375rem 0.75rem;
	}

	.btn {
		width: 100%;
		margin-top: 1rem;
	}

	.btn-success {
		background-color: #28a745;
		border-color: #28a745;
	}

	.card.mb-4 {
		margin-bottom: 2rem;
	}

	.form-check-input {
		width: 1.25rem;
		height: 1.25rem;
	}

	.list-group-item {
		background-color: #f8f9fa;
		color: #495057;
	}
</style>
