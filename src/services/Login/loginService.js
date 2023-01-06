import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/login`;

const login = (email, password) => axios
	.post(API_URL, {
		email,
		password,
	})
	.then((response) => {
		if (response.data.data.token) {
			localStorage.setItem('user', JSON.stringify(response.data));
		}
		return response.data;
	});
const authService = {
	login,
};

export default authService;
