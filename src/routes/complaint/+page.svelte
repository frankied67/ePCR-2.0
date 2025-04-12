<script>
  import Patient from "$lib/ui/Patient.svelte";
  import ABC from "$lib/ui/ABC.svelte";
  import Sepsis from "$lib/ui/Sepsis.svelte";
  import Choking from "$lib/ui/Choking.svelte";
  import ChokingSevere from "$lib/ui/ChokingSevere.svelte";

  import { patient } from "$lib/stores/patientStore";
  import Footer from "$lib/ui/Footer.svelte";
</script>

<div class="container mt-4">
  <Patient />

  <Sepsis />

  <div class="mt-4">
    <ABC />
  </div>

  
  {#if $patient.airway === "no"}
    <div class="mt-4">
      <Choking /> 
    </div>
  {/if}


  {#if $patient.chokingSeverity === "severe"}
    <div class="mt-4">
      <ChokingSevere />
    </div>
  {/if}
</div>

<Footer />
