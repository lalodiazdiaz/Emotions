import axios from 'axios';

const URL = 'https://emociones-be-production.up.railway.app/api/';

const getLogin = async (body) => {
	const resp = await axios.post(URL, body);
};

export default getLogin;
