<script>
    import { patient } from '../stores/patientStore.js';
  
    function updateNOK(field, value) {
      patient.update(p => {
        p.nok = { ...p.nok, [field]: value };
        return p;
      });
    }
  </script>
  
  <div class="card mt-4">
    <div class="card-header bg-primary text-white">Next of Kin</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">First Name</label>
          <input type="text" class="form-control" bind:value={$patient.nok.firstName} on:input={(e) => updateNOK('firstName', e.target.value)} />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Surname</label>
          <input type="text" class="form-control" bind:value={$patient.nok.surname} on:input={(e) => updateNOK('surname', e.target.value)} />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Phone Number</label>
          <input type="text" class="form-control" bind:value={$patient.nok.phone} on:input={(e) => updateNOK('phone', e.target.value)} />
        </div>
      </div>
    </div>
  </div>
  