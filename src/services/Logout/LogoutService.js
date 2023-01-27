import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const local = JSON.parse(localStorage.getItem('user'));
let authStr = '';

if (local) {
	authStr = `Bearer ${local.data.token}`;
}

const logOutSession = async () => {
	const res = await axios.delete(
		`${API_URL}/session/logout`,
		{ headers: { Authorization: authStr } },
	);
	return res.data;
};

export default logOutSession;
