import { ERROR } from './constants';

const errorsApi = (error) => {
	if (error.response.status === ERROR.unauthorized) {
		localStorage.removeItem('user');
		window.location.replace('/login');
	}
};

export default errorsApi;
