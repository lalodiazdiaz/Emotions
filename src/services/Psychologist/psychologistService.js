import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const local = JSON.parse(localStorage.getItem('user'));
let authStr = '';

if (local) {
	authStr = `Bearer ${local.data.token}`;
}

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
