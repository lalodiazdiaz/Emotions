import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/autocomplete`;

const loggedUser = window.localStorage.getItem('user');
const userLogged = JSON.parse(loggedUser);
// let ACCESS_TOKEN = '';

const getautocomplete = (date, time) => axios
	.get(API_URL, {
		date,
		time,
	})
	.then((response) => {
		if (response.data.data.token) {
			localStorage.setItem('user', JSON.stringify(response.data));
		}
		return response.data;
	});

const autocompleteService = {
	getautocomplete,
};

export default autocompleteService;
