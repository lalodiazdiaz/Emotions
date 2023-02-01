import axios from 'axios';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import errorsApi from '../../apiError';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;
const local = JSON.parse(localStorage.getItem('user'));
let authStr = '';

if (local) {
	authStr = `Bearer ${local.data.token}`;
}
const API_URL_AC = `${process.env.REACT_APP_API_BASE_URL}/appointments`;
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

const param = {
	order: '',
	page: '',
	size: '',
	way: '',
};

const getappointments = () => axios.get(API_URL_AC, {
	headers: {
		Authorization: `token ${ACCESS_TOKEN}`,
	},
	params: param,
});

const postappointments = (data) => {
	axios.post(API_URL_AC, data, {
		headers: header,
	})
		.then((response) => {
			if (response.data.isValid === true) {
				Alertify.success(`<b style='color:white;'>Se registró su cita correctamente.
				</b>`);
			}
			if (response.data.message
				=== 'The therapist does not have available this day and time') {
				Alertify.error(`<b style='color:white;'>La fecha y hora ya están registradas.
				</b>`);
			}
			if (response.data.message
				=== 'idPacient length must be at least 24 characters long') {
				Alertify.warning(
					`<b style='color:dark;'>¿Usted está de acuerdo con los datos ingresados?
				</b>`,
				);
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

export const getNextAppointment = async (params) => {
	const res = await axios.get(API_URL + params, { headers: { Authorization: authStr } })
		.catch((error) => {
		  errorsApi(error);
		});
	return res;
};

export const deleteAppointment = async (id) => {
	const res = await axios.delete(`${API_URL}/appointments?_id=${id}`, {
		headers: { Authorization: authStr },
	});
	return res;
};

export default appointmentsService;
