import { writable } from 'svelte/store';

export const patient = writable({
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
	}
});

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
