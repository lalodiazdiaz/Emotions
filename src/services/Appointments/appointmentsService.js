import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;
// const API_URL = `${process.env.REACT_APP_API_BASE_URL}/appointments`;
const API_URL_A = 'http://localhost:5000/api/appointments';
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
