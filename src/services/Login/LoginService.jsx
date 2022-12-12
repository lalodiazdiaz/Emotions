import axios from 'axios';

const URL = 'https://emociones-be-production.up.railway.app/api/';

const getLogin = async (body) => {
	const resp = await axios.post(URL, body);
	console.log(resp);
	// if (data.data.error === false) {
	// 	localStorage.setItem('UserLogged', JSON.stringify(data.data.loginData));
	// } else if (data.data.error === true) {
	// }
	return resp.data;
};

export default getLogin;
