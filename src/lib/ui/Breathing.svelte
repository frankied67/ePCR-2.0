<script>
	import { patient, updateBreathSounds } from '$lib/stores/patientStore';
	import { derived } from 'svelte/store';

	let clear = $patient.breathSounds.clear;
	let wheeze = $patient.breathSounds.wheeze;
	let crackles = $patient.breathSounds.crackles;

	const showBreathing = derived(patient, ($patient) => {
		return (
			$patient.airway === 'yes' && $patient.breathing === 'yes' && $patient.circulation === 'yes'
		);
	});

	function update() {
		updateBreathSounds({ clear, wheeze, crackles });
	}
</script>

{#if $showBreathing}
	<div class="card mb-4 shadow-sm border-light">
		<div class="card-header bg-info text-white text-center fs-4 fw-bold">Breath Sounds</div>
		<div class="card-body bg-light">
			<div class="row">
				<div class="col-12 col-md-4 mb-2">
					<div class="form-check">
						<input
							type="checkbox"
							id="clear"
							bind:checked={clear}
							class="form-check-input"
							on:change={update}
						/>
						<label for="clear" class="form-check-label fs-5 text-primary fw-bold">Clear</label>
					</div>
				</div>
				<div class="col-12 col-md-4 mb-2">
					<div class="form-check">
						<input
							type="checkbox"
							id="wheeze"
							bind:checked={wheeze}
							class="form-check-input"
							on:change={update}
						/>
						<label for="wheeze" class="form-check-label fs-5 text-primary fw-bold">Wheeze</label>
					</div>
				</div>
				<div class="col-12 col-md-4 mb-2">
					<div class="form-check">
						<input
							type="checkbox"
							id="crackles"
							bind:checked={crackles}
							class="form-check-input"
							on:change={update}
						/>
						<label for="crackles" class="form-check-label fs-5 text-primary fw-bold">Crackles</label
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	{#if wheeze}
		<div class="card mb-4 shadow-sm border-light">
			<div class="card-header bg-info text-white text-center fs-4 fw-bold">Wheeze Management</div>
			<div class="card-body bg-light">
				<p class="fs-5 text-dark">Consider Salbutamol 5mg Neb</p>
				<p class="fs-5 text-dark">
					If No Improvement, Consider Salbutamol 5mg Neb and Ipratropium Bromide 500mcg Neb
				</p>
				<p class="fs-5 text-dark">If No Improvement, Consider Hydrocortisone 100mg slow IV</p>
			</div>
		</div>
	{/if}
{/if}

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
	.fs-5 {
		font-size: 1.25rem;
	}
	.text-dark {
		color: #343a40;
	}
</style>
