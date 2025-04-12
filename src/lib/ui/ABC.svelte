<script>
    import { updatePatientABC } from '$lib/stores/patientStore';
    let airway = '';
    let breathing = '';
    let circulation = '';

    function updateABC() {
        updatePatientABC(airway, breathing, circulation);
    }
</script>

<div class="card mb-4 shadow-sm border-light">
    <div class="card-header bg-info text-white text-center fs-4 fw-bold">
        ABC Assessment
    </div>
    <div class="card-body bg-light">
        <div class="row justify-content-between">
            <div class="col-12 col-md-3 mb-2">
                <label class="form-label text-primary fw-bold fs-5" for="airway">Airway</label>
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input type="radio" bind:group={airway} value="yes" id="airway-yes" class="form-check-input" on:change={updateABC} />
                        <label class="form-check-label" for="airway-yes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" bind:group={airway} value="no" id="airway-no" class="form-check-input" on:change={updateABC} />
                        <label class="form-check-label" for="airway-no">No</label>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-3 mb-2">
                <label class="form-label text-primary fw-bold fs-5" for="breathing">Breathing</label>
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input type="radio" bind:group={breathing} value="yes" id="breathing-yes" class="form-check-input" on:change={updateABC} />
                        <label class="form-check-label" for="breathing-yes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" bind:group={breathing} value="no" id="breathing-no" class="form-check-input" on:change={updateABC} />
                        <label class="form-check-label" for="breathing-no">No</label>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-3 mb-2">
                <label class="form-label text-primary fw-bold fs-5" for="circulation">Circulation</label>
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input type="radio" bind:group={circulation} value="yes" id="circulation-yes" class="form-check-input" on:change={updateABC} />
                        <label class="form-check-label" for="circulation-yes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" bind:group={circulation} value="no" id="circulation-no" class="form-check-input" on:change={updateABC} />
                        <label class="form-check-label" for="circulation-no">No</label>
                    </div>
                </div>
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

    .card-body {
        padding: 1.25rem;
    }

    .form-label {
        font-weight: bold;
        color: #007bff;
    }

    .form-check-input {
        margin-right: 8px;
    }

    .d-flex .form-check {
        margin: 0 5px;
    }

    .row {
        gap: 1rem;
    }

    .card.mb-4 {
        margin-bottom: 2rem;
    }
</style>
