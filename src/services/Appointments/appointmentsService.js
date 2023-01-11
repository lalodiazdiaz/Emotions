import axios from 'axios';

// const API_URL = `${process.env.REACT_APP_API_BASE_URL}
// /appointments?page=1&size=10&order=date&way=1`;

const API_URL = 'http://localhost:5000/api';

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
