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

<nav class="navbar navbar-expand-lg navbar-light bg-light p-3 rounded-top shadow-sm">
  <div class="container d-flex justify-content-between align-items-center">
    <div class="d-flex flex-wrap gap-3">
      <a href="/complaint" class="nav-link text-dark px-2">Complaint</a>
      <a href="/medication" class="nav-link text-dark px-2">Medication</a>
      <a href="/vitals" class="nav-link text-dark px-2">Vitals</a>
      <a href="/demographic" class="nav-link text-dark px-2">Demographic</a>
    </div>
    {#if $loggedInUser}
      <button class="btn btn-outline-dark btn-sm" on:click={handleLogout}>Logout</button>
    {/if}
  </div>
</nav>
<div class="card mb-4 shadow-sm border-light">
  <div class="card-header bg-info text-white text-center fs-4 fw-bold">
    Patient Information
  </div>
  <div class="card-body bg-light">
    <div class="row g-3 align-items-end">
      <div class="col-12 col-md-3">
        <label class="form-label" for="firstName">First Name</label>
        <input id="firstName" type="text" class="form-control form-control-sm" bind:value={firstName} placeholder="First Name" />
      </div>
      <div class="col-12 col-md-3">
        <label class="form-label" for="surname">Surname</label>
        <input id="surname" type="text" class="form-control form-control-sm" bind:value={surname} placeholder="Surname" />
      </div>
      <div class="col-12 col-md-3">
        <label class="form-label" for="dob">Date of Birth</label>
        <input id="dob" type="date" class="form-control form-control-sm" bind:value={dob} on:input={updatePatient} />
      </div>
      <div class="col-12 col-md-3">
        <label class="form-label" for="age">Age</label>
        <input id="age" type="text" class="form-control form-control-sm" value={$patient.age} readonly />
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

  .form-label {
    font-weight: bold;
    color: #007bff;
  }

  .card.mb-4 {
    margin-bottom: 2rem;
  }
</style>
