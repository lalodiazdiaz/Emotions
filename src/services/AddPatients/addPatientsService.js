import axios from 'axios';
import errorsApi from '../../apiError';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/user/registerPatient`;
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

const postPatients = async (form) => {
	const res = await axios.post(`${API_URL}`, form, {
		headers: header,
	})
		.catch((error) => {
			errorsApi(error);
		});
	return res;
};

const addPatientsService = {
	postPatients,
};

export default addPatientsService;
