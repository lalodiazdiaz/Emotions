import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;
const local = JSON.parse(localStorage.getItem('user'));
let authStr = '';

if (local) {
	authStr = `Bearer ${local.data.token}`;
}
const API_URL_A = `${process.env.REACT_APP_API_BASE_URL}/appointments`;
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

const getappointments = () => axios.get(API_URL_A, {
	headers: {
		Authorization: `token ${ACCESS_TOKEN}`,
	},
	params: param,
});

const appointmentsService = {
	getappointments,
};

export const getNextAppointment = async (params) => {
	const res = await axios.get(API_URL + params, { headers: { Authorization: authStr } });
	return res;
};

export const deleteAppointment = async (id) => {
	const res = await axios.delete(`${API_URL}/appointments?_id=${id}`, {
		headers: { Authorization: authStr },
	});
	return res;
};

export default appointmentsService;
