import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const logOutSession = async (AuthStr) => {
	const res = await axios.delete(
		`${API_URL}/session/logout`,
		{ headers: { Authorization: AuthStr } },
	);
	localStorage.removeItem('user');
	return res.data;
};

export default logOutSession;
