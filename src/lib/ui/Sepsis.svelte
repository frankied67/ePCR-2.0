<script>
    import { patient } from "$lib/patientStore";
    import { derived } from "svelte/store";
  
    const sepsisMarkers = derived(patient, ($patient) => {
      if (!$patient.vitals.length) return false;
      
      const latestVitals = $patient.vitals[$patient.vitals.length - 1];
      let count = 0;
  
      if (latestVitals.heartRate > 90) count++;
      if (latestVitals.temperature < 36 || latestVitals.temperature > 38.3) count++;
      if (latestVitals.breathingRate > 20) count++;
      if (latestVitals.bloodSugar > 7.7) count++;
      if (latestVitals.acuteConfusion) count++;
  
      return count >= 2;
    });
  </script>
  
  {#if $sepsisMarkers}
    <div class="alert alert-danger text-center mt-4 mb-4" role="alert">
      <strong>This Patient Has Markers For Sepsis</strong>
    </div>
  {/if}
  