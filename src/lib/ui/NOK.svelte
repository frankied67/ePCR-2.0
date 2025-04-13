<script>
	import { patient } from '../stores/patientStore.js';

	function updateNOK(field, value) {
		patient.update((p) => {
			p.nok = { ...p.nok, [field]: value };
			return p;
		});
	}
</script>

<div class="card mb-4 shadow-sm border-light">
	<div class="card-header bg-info text-white text-center fs-4 fw-bold rounded-top">Next of Kin</div>
	<div class="card-body bg-light">
		<div class="row g-3">
			<div class="col-12 col-md-6">
				<label for="nokFirstName" class="form-label text-primary fw-bold">First Name</label>
				<input
					id="nokFirstName"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.nok.firstName}
					on:input={(e) => updateNOK('firstName', e.target.value)}
				/>
			</div>
			<div class="col-12 col-md-6">
				<label for="nokSurname" class="form-label text-primary fw-bold">Surname</label>
				<input
					id="nokSurname"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.nok.surname}
					on:input={(e) => updateNOK('surname', e.target.value)}
				/>
			</div>
			<div class="col-12 col-md-6">
				<label for="nokPhone" class="form-label text-primary fw-bold">Phone Number</label>
				<input
					id="nokPhone"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.nok.phone}
					on:input={(e) => updateNOK('phone', e.target.value)}
				/>
			</div>
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
</style>
