<script>
    import { patient } from '$lib/patientStore.js';
  
    function updateAddress(field, value) {
      patient.update(p => {
        p.address = { ...p.address, [field]: value };
        return p;
      });
    }
  </script>
  
  <div class="card mt-4">
    <div class="card-header bg-primary text-white">Address</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Line 1 Address</label>
          <input type="text" class="form-control" bind:value={$patient.address.line1} on:input={(e) => updateAddress('line1', e.target.value)} />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Line 2 Address</label>
          <input type="text" class="form-control" bind:value={$patient.address.line2} on:input={(e) => updateAddress('line2', e.target.value)} />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Line 3 Address</label>
          <input type="text" class="form-control" bind:value={$patient.address.line3} on:input={(e) => updateAddress('line3', e.target.value)} />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">County</label>
          <input type="text" class="form-control" bind:value={$patient.address.county} on:input={(e) => updateAddress('county', e.target.value)} />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Post/Eircode</label>
          <input type="text" class="form-control" bind:value={$patient.address.postcode} on:input={(e) => updateAddress('postcode', e.target.value)} />
        </div>
      </div>
    </div>
  </div>
  