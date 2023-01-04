import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/login`;

const getNextAppointment = async () => {
	await axios.get(API_URL)
		.then((response) => {
			console.log(response);
		});
};

export default getNextAppointment;
