import { writable, get } from 'svelte/store';

export const users = writable([
	{ username: 'Homer Simpson', password: 'homerpassword', role: 'admin' },
	{ username: 'Marge Simpson', password: 'margepassword', role: 'user' },
	{ username: 'Bart Simpson', password: 'bartpassword', role: 'user' },
	{ username: 'Lisa Simpson', password: 'lisapassword', role: 'user' }
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
