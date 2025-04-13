<script>
	import { patient } from '../stores/patientStore.js';

	function updateAddress(field, value) {
		patient.update((p) => {
			p.address = { ...p.address, [field]: value };
			return p;
		});
	}
</script>

<div class="card mb-4 shadow-sm border-light">
	<div class="card-header bg-info text-white text-center fs-4 fw-bold rounded-top">Address</div>
	<div class="card-body bg-light">
		<div class="row g-3">
			<div class="col-12 col-md-6">
				<label for="line1" class="form-label text-primary fw-bold">Line 1 Address</label>
				<input
					id="line1"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.address.line1}
					on:input={(e) => updateAddress('line1', e.target.value)}
				/>
			</div>
			<div class="col-12 col-md-6">
				<label for="line2" class="form-label text-primary fw-bold">Line 2 Address</label>
				<input
					id="line2"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.address.line2}
					on:input={(e) => updateAddress('line2', e.target.value)}
				/>
			</div>
			<div class="col-12 col-md-6">
				<label for="line3" class="form-label text-primary fw-bold">Line 3 Address</label>
				<input
					id="line3"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.address.line3}
					on:input={(e) => updateAddress('line3', e.target.value)}
				/>
			</div>
			<div class="col-12 col-md-6">
				<label for="county" class="form-label text-primary fw-bold">County</label>
				<input
					id="county"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.address.county}
					on:input={(e) => updateAddress('county', e.target.value)}
				/>
			</div>
			<div class="col-12 col-md-6">
				<label for="postcode" class="form-label text-primary fw-bold">Post/Eircode</label>
				<input
					id="postcode"
					type="text"
					class="form-control form-control-sm"
					bind:value={$patient.address.postcode}
					on:input={(e) => updateAddress('postcode', e.target.value)}
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
