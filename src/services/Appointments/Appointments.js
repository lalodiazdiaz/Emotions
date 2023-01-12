import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/appointments`;

const loggedUser = window.localStorage.getItem('user');
const userLogged = JSON.parse(loggedUser);
let ACCESS_TOKEN = '';

if (userLogged) {
	ACCESS_TOKEN = userLogged.data.token;
}

const header = {
	Authorization: `Bearer ${ACCESS_TOKEN}`,
	'Content-type': 'application/json; charset=UTF-8',
};

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

const postappointments = (data) => {
	axios.post(API_URL, data, {
		headers: header,
	})
		.then((response) => {
			console.log(response.data);
			return response.data;
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
