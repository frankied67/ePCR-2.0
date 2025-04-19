import { writable, get } from 'svelte/store';

export const users = writable([
	{ username: 'Admin Medic', password: 'adminpassword', role: 'admin' },
	{ username: 'Medic 11', password: 'medic11password', role: 'user' },
	{ username: 'Medic 12', password: 'medic12password', role: 'user' },
	{ username: 'Medic 20', password: 'medic20password', role: 'user' }
]);

export const loggedInUser = writable(null);

export const createUser = (username, role, password) => {
	users.update((currentUsers) => [...currentUsers, { username, role, password }]);
};

export const deleteUser = (username) => {
	users.update((currentUsers) => currentUsers.filter((user) => user.username !== username));
};

export const login = (username, password) => {
	const currentUsers = get(users);
	const foundUser = currentUsers.find(
		(user) => user.username === username && user.password === password
	);

	if (foundUser) {
		loggedInUser.set(foundUser);
		return true;
	}

	return false;
};

export const logout = () => {
	loggedInUser.set(null);
};
