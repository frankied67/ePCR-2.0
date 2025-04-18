<script>
	import { patient, addPatient } from '$lib/stores/patientStore';

	$: data = $patient;

	const handleSubmitAndReset = () => {
		addPatient();
		console.log('Patient Data Submitted', data);
	};
</script>

<div class="container my-5">
	<h1 class="text-center mb-5">Patient Summary Report</h1>
	<p class="text-center text-muted mb-4">
		<strong>Date Generated:</strong>
		{new Date().toLocaleString()}
	</p>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Personal Details</h5>
			<p><strong>Name:</strong> {data.firstName} {data.surname}</p>
			<p><strong>Date of Birth:</strong> {data.dob}</p>
			<p><strong>Age:</strong> {data.age}</p>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Address</h5>
			<p>{data.address.line1}</p>
			<p>{data.address.line2}</p>
			<p>{data.address.line3}</p>
			<p>{data.address.county}</p>
			<p>{data.address.postcode}</p>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Next of Kin</h5>
			<p><strong>Name:</strong> {data.nok.firstname} {data.nok.surname}</p>
			<p><strong>Phone:</strong> {data.nok.phone}</p>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Primary Survey - ABC</h5>
			<p><strong>Airway:</strong> {data.airway}</p>
			<p><strong>Breathing:</strong> {data.breathing}</p>
			<p><strong>Circulation:</strong> {data.circulation}</p>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Breath Sounds</h5>
			<ul>
				{#if data.breathSounds.clear}<li>Clear</li>{/if}
				{#if data.breathSounds.wheeze}<li>Wheeze</li>{/if}
				{#if data.breathSounds.crackles}<li>Crackles</li>{/if}
			</ul>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Vitals</h5>
			{#if data.vitals.length > 0}
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>#</th>
							{#each Object.keys(data.vitals[0]) as key}
								<th>{key}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each data.vitals as v, i}
							<tr>
								<td>{i + 1}</td>
								{#each Object.values(v) as value}
									<td>{value}</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			{:else}
				<p>No vitals recorded.</p>
			{/if}
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">SAMPLE History</h5>
			<p><strong>Symptoms:</strong> {data.sample.symptoms}</p>
			<p><strong>Allergies:</strong> {data.sample.allergies?.join(', ')}</p>
			<p><strong>Medications:</strong> {data.sample.medications?.join(', ')}</p>
			<p><strong>Last Oral Intake:</strong> {data.sample.lastOralIntake}</p>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Administered Medications</h5>
			<ul>
				{#each data.administeredMedications as med}
					<li>{med.name} - {med.dose}</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Choking / CPR</h5>
			<p><strong>Conscious:</strong> {data.choking.conscious}</p>
			<p>
				<strong>CPR Started:</strong>
				{data.choking.cprStarted ? 'Yes' : 'No'}
				{data.choking.cprStartTime && `(Time: ${data.choking.cprStartTime})`}
			</p>
			<p>
				<strong>CPR Stopped:</strong>
				{data.choking.cprStopped ? 'Yes' : 'No'}
				{data.choking.cprStopTime && `(Time: ${data.choking.cprStopTime})`}
			</p>
			<p>
				<strong>ROSC Achieved:</strong>
				{data.choking.roscAchieved ? 'Yes' : 'No'}
				{data.choking.roscTime && `(Time: ${data.choking.roscTime})`}
			</p>
		</div>
	</div>
	<div class="card mb-4">
		<div class="card-body">
			<h5 class="card-title">Additional Notes</h5>
			<p>{data.notes}</p>
		</div>
	</div>
	<div class="text-center mt-5 d-print-none">
		<button class="btn btn-primary" on:click={() => window.print()}> Print / Save as PDF </button>
	</div>
	<div class="text-center mt-4">
		<button class="btn btn-success" on:click={handleSubmitAndReset}>Submit and Reset</button>
	</div>
</div>

<style>
	@media print {
		.d-print-none {
			display: none !important;
		}
		body {
			background-color: white;
		}
	}
</style>
