<script>
    import { patient, addAdministeredMedication, deleteAdministeredMedication } from '../stores/patientStore';
  
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
  
  <div class="card">
    <div class="card-header bg-primary text-white">Administered Medications</div>
    <div class="card-body">
      <!-- Medication form -->
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-3">
          <label for="medication-time" class="form-label">Time (24hr)</label>
          <input type="time" id="medication-time" bind:value={time} class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="medication-name" class="form-label">Medication</label>
          <input type="text" id="medication-name" bind:value={medication} class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="medication-dose" class="form-label">Dose (mg)</label>
          <input type="number" id="medication-dose" bind:value={dose} class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="medication-route" class="form-label">Route</label>
          <select id="medication-route" bind:value={route} class="form-control" required>
            {#each routes as r}
              <option value={r}>{r}</option>
            {/each}
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit Medication</button>
      </form>
  
      <div class="mt-4">
        <h5>Administered Medications:</h5>
        <ul class="list-group">
          {#each $patient.administeredMedications as medication, index}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span><strong>{medication.time}</strong></span>
              <span>{medication.medication}</span>
              <span>{medication.dose} mg</span>
              <span>{medication.route}</span>
              <button class="btn btn-danger btn-sm" on:click={() => handleDelete(index)}>Delete</button>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div> 
  