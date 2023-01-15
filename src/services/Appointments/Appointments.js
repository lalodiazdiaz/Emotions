import axios from 'axios';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

// const API_URL = `${process.env.REACT_APP_API_BASE_URL}/appointments`;
const API_URL = 'http://localhost:5000/api/appointments';
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
			if (response.data.isValid === true) {
				Alertify.success(`<b style='color:white;'>Se registro su cita correctamente.
				</b>`);
			}
			if (response.data.isValid === false) {
				Alertify.error(`<b style='color:white;'>Esta fecha y hora no están disponibles.
				</b>`);
			}
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
