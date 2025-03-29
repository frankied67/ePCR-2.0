<script>
  import Patient from "$lib/ui/Patient.svelte";
  import Vitals from "$lib/ui/Vitals.svelte";
  import { patient, updatePatientVitals } from "$lib/patientStore"; 

  function addVitals(newVitals) {
    updatePatientVitals(newVitals); 
  }
</script>

<div class="container mt-4">
  <Patient />

  <div class="mt-4">
    <Vitals on:vitalsUpdated="{addVitals}" /> 
  </div>
</div>
