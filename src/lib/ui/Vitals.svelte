<script>
    import { patient, updatePatientVitals } from '$lib/patientStore';
    import { derived } from 'svelte/store';

    let time = "";
    let heartRate = "";
    let ecgRythm = "";
    let breathingRate = "";
    let systolicBP = "";
    let diastolicBP = "";
    let bloodSugar = "";
    let temperature = "";
    let oxygenSaturation = "";
    let eyes = "";
    let verbal = "";
    let motor = "";
    let gcs = "";
    let acuteConfusion = false;

    function calculateGCS() {
        gcs = (Number(eyes) || 0) + (Number(verbal) || 0) + (Number(motor) || 0);
    }

    function submitVitals() {
        const newVitals = { 
            time, heartRate, ecgRythm, breathingRate, systolicBP, diastolicBP, 
            bloodSugar, temperature, oxygenSaturation, gcs, acuteConfusion 
        };

        updatePatientVitals(newVitals);

        time = heartRate = ecgRythm = breathingRate = systolicBP = diastolicBP = bloodSugar = temperature = oxygenSaturation = "";
        eyes = verbal = motor = gcs = "";
        acuteConfusion = false;
    }

    let vitalsList = derived(patient, $patient => $patient.vitals || []);
</script>

<div class="card">
    <div class="card-header bg-primary text-white">Vital Signs</div>
    <div class="card-body">
        <div class="row mb-3">
            <div class="col-md-4">
                <label>Time (24h format)</label>
                <input type="time" class="form-control" bind:value={time} />
            </div>
            <div class="col-md-4">
                <label>Heart Rate</label>
                <input type="number" class="form-control" bind:value={heartRate} />
            </div>
            <div class="col-md-4">
                <label>ECG Rhythm</label>
                <input type="text" class="form-control" bind:value={ecgRythm} />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-4">
                <label>Breathing Rate</label>
                <input type="number" class="form-control" bind:value={breathingRate} />
            </div>
            <div class="col-md-4">
                <label>Blood Pressure</label>
                <div class="d-flex">
                    <input type="number" class="form-control me-2" placeholder="Systolic" bind:value={systolicBP} />
                    <input type="number" class="form-control" placeholder="Diastolic" bind:value={diastolicBP} />
                </div>
            </div>
            <div class="col-md-4">
                <label>Blood Sugar (mmol/L)</label>
                <input type="number" class="form-control" bind:value={bloodSugar} step="0.1" />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-4">
                <label>Temperature (°C)</label>
                <input type="number" class="form-control" step="0.1" bind:value={temperature} />
            </div>
            <div class="col-md-4">
                <label>Oxygen Saturation (%)</label>
                <input type="number" class="form-control" bind:value={oxygenSaturation} />
            </div>
            <div class="col-md-4">
                <label>Acute Confusion</label>
                <input type="checkbox" bind:checked={acuteConfusion} />
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-4">
                <label>GCS</label>
                <div class="d-flex">
                    <input type="number" class="form-control me-2" placeholder="Eyes (1-4)" min="1" max="4" bind:value={eyes} on:input={calculateGCS} />
                    <input type="number" class="form-control me-2" placeholder="Verbal (1-5)" min="1" max="5" bind:value={verbal} on:input={calculateGCS} />
                    <input type="number" class="form-control" placeholder="Motor (1-6)" min="1" max="6" bind:value={motor} on:input={calculateGCS} />
                </div>
                <input type="text" class="form-control mt-2" readonly bind:value={gcs} />
            </div>
        </div>
        <button class="btn btn-primary" on:click={submitVitals}>Submit</button>
    </div>
</div>

<h3 class="mt-5 mb-4 p-3 bg-light text-dark">Recorded Vital Signs</h3>
<ul class="list-group">
    {#each $vitalsList as vital}
        <li class="list-group-item mb-2 p-3 border rounded">
            <div class="row">
                <div class="col-2"><strong class="text-primary">Time:</strong> {vital.time}</div>
                <div class="col-2"><strong class="text-primary">HR:</strong> {vital.heartRate}</div>
                <div class="col-2"><strong class="text-primary">BP:</strong> {vital.systolicBP}/{vital.diastolicBP}</div>
                <div class="col-2"><strong class="text-primary">Temp:</strong> {vital.temperature} °C</div>
                <div class="col-2"><strong class="text-primary">SpO2:</strong> {vital.oxygenSaturation} %</div>
                <div class="col-2"><strong class="text-primary">GCS:</strong> {vital.gcs}</div>
            </div>
            <div class="row mt-2">
                <div class="col-2"><strong class="text-primary">Blood Sugar:</strong> {vital.bloodSugar} mmol/L</div>
                <div class="col-2"><strong class="text-primary">Acute Confusion:</strong> {vital.acuteConfusion ? 'Yes' : 'No'}</div>
            </div>
        </li>
    {/each}
</ul>
