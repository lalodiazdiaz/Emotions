import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/appointments`;

const loggedUser = window.localStorage.getItem('user');
const userLogged = JSON.parse(loggedUser);
const ACCESS_TOKEN = userLogged.data.token;

const headers = {
	headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
};

console.log(headers);

const getappointments = (date, time) => axios
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

const postappointments = (idUser, idPatient, date) => {
	axios.post(API_URL, {
		date,
		headers,
		idPatient,
		idUser,
	})
		.then((response) => {
			if (response.data.data.token) { return response.data; }
			return 0;
		})
		.catch((error) => {
			console.log(error);
		});
};

const appointmentsService = {
	getappointments,
	postappointments,
};

export default appointmentsService;
