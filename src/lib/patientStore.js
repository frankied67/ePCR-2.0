import { writable } from 'svelte/store';

export const patient = writable({
	firstName: '',
	surname: '',
	dob: '',
	age: ''
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
