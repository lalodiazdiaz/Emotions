import axios from 'axios';

// const API_URL = `${process.env.REACT_APP_API_BASE_URL}/patients`;
const API_URL = 'http://localhost:5000/api/user/patients';
const loggedUser = window.localStorage.getItem('user');
const userLogged = JSON.parse(loggedUser);
let ACCESS_TOKEN = '';

if (userLogged) {
	ACCESS_TOKEN = userLogged.data.token;
}

const param = {
	page: '',
	size: '',
	way: '',
};

const getpatients = () => axios.get(API_URL, {
	headers: {
		Authorization: `token ${ACCESS_TOKEN}`,
	},
	params: param,
});

const patientsService = {
	getpatients,
};

export default patientsService;
