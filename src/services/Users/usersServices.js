import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/user/autocompletes`;

const loggedUser = window.localStorage.getItem('user');
const userLogged = JSON.parse(loggedUser);
let ACCESS_TOKEN = '';

if (userLogged) {
	ACCESS_TOKEN = userLogged.data.token;
}

const searchUsers = () => axios.get(API_URL, {
	headers: {
		Authorization: `token ${ACCESS_TOKEN}`,
	},
});

const searchService = {
	searchUsers,
};

export default searchService;
