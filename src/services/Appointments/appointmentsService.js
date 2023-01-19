import axios from 'axios';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;
const API_URL_AC = `${process.env.REACT_APP_API_BASE_URL}/autocompletes`;
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
	.get(API_URL_AC, {
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
			return response.data;
		})
		.catch((error) => {
		});
};

const appointmentsService = {
	getappointments,
	postappointments,
};

export const getNextAppointment = async (AuthStr, params) => {
	const res = await axios.get(API_URL + params, { headers: { Authorization: AuthStr } });
	return res;
};

export const deleteAppointment = async (AuthStr, { id }) => {
	const res = await axios.delete(`${API_URL}/appointments`, {
		data: { _id: id },
		headers: { Authorization: AuthStr },
	});
	return res;
};

export default appointmentsService;
