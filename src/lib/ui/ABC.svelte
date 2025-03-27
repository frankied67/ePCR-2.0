<script>
    import { updatePatientABC } from '$lib/patientStore';
    let airway = '';
    let breathing = '';
    let circulation = '';

    function updateABC() {
        updatePatientABC(airway, breathing, circulation);
    }
</script>

<div class="card mb-3">
    <div class="card-header bg-primary text-white">
        ABC Assessment
    </div>
    <div class="card-body">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 text-center mb-3">
                <label class="fw-bold fs-4 text-white bg-primary rounded p-2 w-100">Airway</label>
                <div class="d-flex justify-content-around">
                    <div class="form-check">
                        <input type="radio" bind:group={airway} value="yes" id="airway-yes" class="form-check-input" />
                        <label class="form-check-label" for="airway-yes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" bind:group={airway} value="no" id="airway-no" class="form-check-input" />
                        <label class="form-check-label" for="airway-no">No</label>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 text-center mb-3">
                <label class="fw-bold fs-4 text-white bg-primary rounded p-2 w-100">Breathing</label>
                <div class="d-flex justify-content-around">
                    <div class="form-check">
                        <input type="radio" bind:group={breathing} value="yes" id="breathing-yes" class="form-check-input" />
                        <label class="form-check-label" for="breathing-yes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" bind:group={breathing} value="no" id="breathing-no" class="form-check-input" />
                        <label class="form-check-label" for="breathing-no">No</label>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 text-center mb-3">
                <label class="fw-bold fs-4 text-white bg-primary rounded p-2 w-100">Circulation</label>
                <div class="d-flex justify-content-around">
                    <div class="form-check">
                        <input type="radio" bind:group={circulation} value="yes" id="circulation-yes" class="form-check-input" />
                        <label class="form-check-label" for="circulation-yes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" bind:group={circulation} value="no" id="circulation-no" class="form-check-input" />
                        <label class="form-check-label" for="circulation-no">No</label>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
