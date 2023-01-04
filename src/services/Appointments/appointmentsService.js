import axios from 'axios';

// const API_URL = `${process.env.REACT_APP_API_BASE_URL}
// /appointments?page=1&size=10&order=date&way=1`;

const API_URL = 'http://localhost:5000/api/appointments?page=1&size=10&order=date&way=1';

const getNextAppointment = async (AuthStr) => {
	const res = await axios.get(API_URL, { headers: { Authorization: AuthStr } });
	return res.data.data;
};

export default getNextAppointment;
