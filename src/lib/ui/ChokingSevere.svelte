<script>
	import { patient, updateChoking } from '$lib/stores/patientStore';
	import { get } from 'svelte/store';

	let conscious = '';
	let p;


	$: p = $patient;
	$: conscious = p.choking.conscious;

	function setConscious(value) {
		updateChoking({ conscious: value });
	}

	function startCPR() {
		const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		updateChoking({ cprStarted: true, cprStartTime: now });
	}

	function stopCPR() {
		const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		updateChoking({ cprStopped: true, cprStopTime: now });
	}

	function recordROSC() {
		const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		updateChoking({ roscAchieved: true, roscTime: now });
	}
</script>

<div class="card mt-3">
	<div class="card-header bg-danger text-white">Severe Choking - Intervention</div>
	<div class="card-body">
		<p class="fw-bold">Is the patient conscious?</p>
		<div class="form-check">
			<input type="radio" id="consciousYes" class="form-check-input" checked={conscious === 'yes'} on:change={() => setConscious('yes')} />
			<label for="consciousYes" class="form-check-label">Yes</label>
		</div>
		<div class="form-check">
			<input type="radio" id="consciousNo" class="form-check-input" checked={conscious === 'no'} on:change={() => setConscious('no')} />
			<label for="consciousNo" class="form-check-label">No</label>
		</div>

		{#if conscious === 'yes'}
			<div class="mt-3 alert alert-info">
				<strong>Action:</strong> Deliver <strong>1 to 5 back blows</strong>, followed by <strong>1 to 5 abdominal thrusts</strong>.
			</div>
		{:else if conscious === 'no'}
			<div class="mt-3 alert alert-warning">
				<strong>Action:</strong> Begin <strong>1 cycle of CPR</strong>.
			</div>

			{#if !p.choking.cprStarted}
				<button class="btn btn-outline-danger mt-2" on:click={startCPR}>
					Start CPR
				</button>
			{:else}
				<div class="mt-2 text-success fw-bold">
					CPR started at: {p.choking.cprStartTime}
				</div>

				{#if !p.choking.cprStopped}
					<button class="btn btn-outline-dark mt-2" on:click={stopCPR}>
						Stop CPR
					</button>
				{:else}
					<div class="mt-2 text-secondary fw-bold">
						CPR stopped at: {p.choking.cprStopTime}
					</div>
				{/if}

				{#if !p.choking.roscAchieved}
					<button class="btn btn-outline-primary mt-2" on:click={recordROSC}>
						ROSC Achieved
					</button>
				{:else}
					<div class="mt-2 text-primary fw-bold">
						ROSC at: {p.choking.roscTime}
					</div>
				{/if}
			{/if}
		{/if}
	</div>
</div>
