<script>
  import { loggedInUser, logout } from '$lib/stores/userStore';
  import { goto } from "$app/navigation";
  import { patient, updatePatientNameAndDob } from '../stores/patientStore';

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

  function handleLogout() {
    logout();
    goto('/');
  }
</script>

<nav class="nav bg-primary p-2">
  <div class="container d-flex justify-content-between">
    <a href="/complaint" class="nav-link text-white">Complaint</a>
    <a href="/medication" class="nav-link text-white">Medication</a>
    <a href="/vitals" class="nav-link text-white">Vitals</a>
    <a href="/demographic" class="nav-link text-white">Demographic</a>
    {#if $loggedInUser}
      <button class="btn btn-link text-white" on:click={handleLogout}>Logout</button>
    {/if}
  </div>
</nav>

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
