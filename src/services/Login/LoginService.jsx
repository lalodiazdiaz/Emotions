import axios from 'axios';

const API_URL = 'http://localhost:5000/api/login';

const login = (email, password) => axios
	.post(API_URL, {
		email,
		password,
	})
	.then((response) => {
		if (response.data) {
			localStorage.setItem('user', JSON.stringify(response.data));
		}
		return response.data;
	});

export default {
	login,
};
