<script>
    import { patient, updatePatientNameAndDob } from '$lib/patientStore'; 
    import { onMount } from 'svelte';
  
    let firstName = "";
    let surname = "";
    let dob = "";
  
    $: {
      $patient;
      firstName = $patient.firstName;
      surname = $patient.surname;
      dob = $patient.dob;
    }
  
    function updatePatient() {
      updatePatientNameAndDob(firstName, surname, dob);
    }
</script>
  
<div class="container-fluid bg-primary text-white py-3">
  <div class="container">
    <div class="row justify-content-center align-items-center text-center">
      <div class="col-md-3">
        <label class="form-label">First Name</label>
        <input type="text" class="form-control" bind:value={firstName} placeholder="First Name" />
      </div>
      <div class="col-md-3">
        <label class="form-label">Surname</label>
        <input type="text" class="form-control" bind:value={surname} placeholder="Surname" />
      </div>
      <div class="col-md-3">
        <label class="form-label">Date of Birth</label>
        <input type="date" class="form-control" bind:value={dob} on:input={updatePatient} />
      </div>
      <div class="col-md-3">
        <label class="form-label">Age</label>
        <input type="text" class="form-control" value={$patient.age} readonly />
      </div>
    </div>
  </div>
</div>
