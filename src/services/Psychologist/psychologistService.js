import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const local = JSON.parse(localStorage.getItem('user'));
let authStr = '';

if (local) {
	authStr = `Bearer ${local.data.token}`;
}

console.log(authStr);

export const getAllPsychologist = async (params) => {
	const res = await axios.get(API_URL + params, { headers: { Authorization: authStr } });
	return res;
};

export const deletePsychologist = async (id) => {
	const res = await axios.delete(`${API_URL}/user/deleteTherapist?_id=${id}`, {
		headers: { Authorization: authStr },
	});
	return res;
};

export const addPsychologist = async ({ name, middleName, lastName, birthdate,
	 email, license, phone, range }) => {
	const res = await axios.post(`${API_URL}/user/register`, {
		 data: {
			birthdate,
			email,
			lastName,
			license,
			middleName,
			name,
			phone,
			range,
		 },
		headers: { Authorization: authStr },
	});
	return res;
};
