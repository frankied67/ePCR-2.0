<script>
    import { patient, updateChoking } from '$lib/stores/patientStore.js';
    import ChokingSevere from './ChokingSevere.svelte';
    import ChokingMild from './ChokingMild.svelte';
    import ChokingResolved from './ChokingResolved.svelte';
  
    let severity = $patient.choking.conscious || '';
  

    function handleSeverityChange() {
      updateChoking({ conscious: severity });
    }
  
    
    $: handleSeverityChange();
  </script>
  
  <div class="card">
      <div class="card-header bg-danger text-white">
          Choking Assessment
      </div>
      <div class="card-body">
          <p class="fw-bold">Select the severity of the choking:</p>
          <div class="form-check">
              <input type="radio" bind:group={severity} value="severe" id="severe" class="form-check-input" />
              <label for="severe" class="form-check-label">Severe - not breathing / ineffective cough</label>
          </div>
          <div class="form-check">
              <input type="radio" bind:group={severity} value="mild" id="mild" class="form-check-input" />
              <label for="mild" class="form-check-label">Mild - effective cough present</label>
          </div>
          <div class="form-check">
              <input type="radio" bind:group={severity} value="resolved" id="resolved" class="form-check-input" />
              <label for="resolved" class="form-check-label">Resolved - patient breathing normally</label>
          </div>
      </div>
  </div>
  
  {#if severity === 'severe'} 
      <ChokingSevere />
  {:else if severity === 'mild'}
      <ChokingMild />
  {:else if severity === 'resolved'}
      <ChokingResolved />
  {/if}
  