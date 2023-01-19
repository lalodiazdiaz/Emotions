import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

export const getAllPsychologist = async (AuthStr, params) => {
	const res = await axios.get(API_URL + params, { headers: { Authorization: AuthStr } });
	return res;
};

export const deletePsychologist = async (AuthStr, { id }) => {
	const res = await axios.delete(`${API_URL}/appointments`, {
		data: { _id: id },
		headers: { Authorization: AuthStr },
	});
	return res;
};
