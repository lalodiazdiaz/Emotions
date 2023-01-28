import axios from 'axios';
import Alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/user/register`;
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

const postPatients = (data) => {
	axios.post(API_URL, data, {
		headers: header,
	})
		.then((response) => {
			if (response.data.isValid === true) {
				Alertify.success(`<b style='color:white;'>Se registró su paciente correctamente.
				</b>`);
			}
			return response.data;
		})
		.catch((error) => {
		});
};

const addPatientsService = {
	postPatients,
};

export default addPatientsService;
