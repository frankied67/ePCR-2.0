<script>
	import { patients, deletePatient } from '../stores/patientStore.js';
	import { onDestroy } from 'svelte';

	let search = '';
	let allPatients = [];
	let filtered = [];

	const unsubscribe = patients.subscribe((value) => {
		allPatients = value;
		filtered = filterList(search);
	});

	onDestroy(() => {
		unsubscribe();
	});

	$: filtered = filterList(search);

	function filterList(term) {
		if (!term) return allPatients;
		const lower = term.toLowerCase();
		return allPatients.filter((p) => (p.firstName + ' ' + p.surname).toLowerCase().includes(lower));
	}
</script>

<div class="container mt-4">
	<h3 class="mb-3">Saved Patients</h3>
	<input
		type="text"
		class="form-control mb-3"
		placeholder="Search by name..."
		bind:value={search}
	/>

	{#if filtered.length > 0}
		<ul class="list-group">
			{#each filtered as patient}
				<li class="list-group-item d-flex justify-content-between align-items-center">
					<div>
						<strong>{patient.firstName} {patient.surname}</strong><br />
						DOB: {patient.dob} — Age: {patient.age}
					</div>
					<button class="btn btn-danger btn-sm" on:click={() => deletePatient(patient.id)}>
						Delete
					</button>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No patients found.</p>
	{/if}
</div>
