import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';

export const patient = writable({
	id: nanoid(),
	firstName: '',
	surname: '',
	dob: '',
	age: '',
	airway: '',
	breathing: '',
	circulation: '',
	address: {
		line1: '',
		line2: '',
		line3: '',
		county: '',
		postcode: ''
	},
	nok: {
		firstname: '',
		surname: '',
		phone: ''
	},
	vitals: [],
	sample: {
		symptoms: '',
		allergies: [],
		medications: [],
		lastOralIntake: ''
	},
	administeredMedications: [],
	choking: {
		conscious: '',
		cprStarted: false,
		cprStartTime: '',
		cprStopped: false,
		cprStopTime: '',
		roscAchieved: false,
		roscTime: ''
	},
	breathSounds: {
		clear: false,
		wheeze: false,
		crackles: false
	},
	notes: ''
});

export const patients = writable([]);

export const addPatient = () => {
	patient.update(($patient) => {
		patients.update((currentPatients) => {
			return [...currentPatients, $patient];
		});
		resetPatient();
		return $patient;
	});
};

export function updatePatientNameAndDob(firstName, surname, dob) {
	patient.update((p) => ({
		...p,
		firstName,
		surname,
		dob,
		age: calculateAge(dob)
	}));
}

export function updatePatientABC(airway, breathing, circulation) {
	patient.update((p) => ({
		...p,
		airway,
		breathing,
		circulation
	}));
}

export function updatePatientAddress(field, value) {
	patient.update((p) => ({
		...p,
		address: {
			...p.address,
			[field]: value
		}
	}));
}

export function updatePatientVitals(newVitals) {
	patient.update((p) => ({
		...p,
		vitals: [...p.vitals, newVitals]
	}));
}

export function updatePatientSample(sampleData) {
	patient.update((p) => ({
		...p,
		sample: {
			...p.sample,
			...sampleData
		}
	}));
}

export const addAdministeredMedication = (medication) => {
	patient.update(($patient) => {
		$patient.administeredMedications.push(medication);
		return $patient;
	});
};

export const deleteAdministeredMedication = (index) => {
	patient.update(($patient) => {
		$patient.administeredMedications.splice(index, 1);
		return $patient;
	});
};

export function updateChoking(data) {
	patient.update((p) => ({
		...p,
		choking: {
			...p.choking,
			...data
		}
	}));
}

export function updateBreathSounds(breathSounds) {
	patient.update((p) => ({
		...p,
		breathSounds: {
			...p.breathSounds,
			...breathSounds
		}
	}));
}

export function updatePatientNotes(notes) {
	patient.update((p) => ({
		...p,
		notes
	}));
}

export function resetPatient() {
	patient.set({
		id: nanoid(),
		firstName: '',
		surname: '',
		dob: '',
		age: '',
		airway: '',
		breathing: '',
		circulation: '',
		address: {
			line1: '',
			line2: '',
			line3: '',
			county: '',
			postcode: ''
		},
		nok: {
			firstname: '',
			surname: '',
			phone: ''
		},
		vitals: [],
		sample: {
			symptoms: '',
			allergies: [],
			medications: [],
			lastOralIntake: ''
		},
		administeredMedications: [],
		choking: {
			conscious: '',
			cprStarted: false,
			cprStartTime: '',
			cprStopped: false,
			cprStopTime: '',
			roscAchieved: false,
			roscTime: ''
		},
		breathSounds: {
			clear: false,
			wheeze: false,
			crackles: false
		},
		notes: ''
	});
}

function calculateAge(dob) {
	const birthDate = new Date(dob);
	const today = new Date();

	if (birthDate > today) {
		return 'Invalid date';
	}

	let years = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();
	const dayDiff = today.getDate() - birthDate.getDate();

	if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
		years--;
	}

	if (years < 1) {
		const months = today.getMonth() - birthDate.getMonth();
		if (months < 0) {
			return months + 12 + ' months';
		} else {
			return months + ' months';
		}
	}

	return years + ' years';
}
