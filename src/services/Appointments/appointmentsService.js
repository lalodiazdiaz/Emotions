import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

export const getNextAppointment = async (params) => {
	const local = JSON.parse(localStorage.getItem('user'));
	const { token } = local.data;
	const AuthStr = `Bearer ${token}`;
	const res = await axios.get(API_URL + params, { headers: { Authorization: AuthStr } });
	return res;
};

export const deleteAppointment = async ({ id }) => {
	const local = JSON.parse(localStorage.getItem('user'));
	const { token } = local.data;
	const AuthStr = `Bearer ${token}`;
	const res = await axios.delete(`${API_URL}/appointments`, {
		data: { _id: id },
		headers: { Authorization: AuthStr },
	});
	return res;
};
