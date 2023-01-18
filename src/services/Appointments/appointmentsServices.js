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

const param = {
	order: '',
	page: '',
	size: '',
	way: '',
};

const getappointments = () => axios.get(API_URL, {
	headers: {
		Authorization: `token ${ACCESS_TOKEN}`,
	},
	params: param,
});

const appointmentsService = {
	getappointments,
};

export default appointmentsService;
