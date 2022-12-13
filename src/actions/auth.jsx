import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
} from './types';
import AuthService from '../services/Login/LoginService';

export const login = (email, password) => (dispatch) => AuthService.login(email, password)
	.then(
		(data) => {
			dispatch({
				payload: { user: data },
				type: LOGIN_SUCCESS,
			});

			return Promise.resolve();
		},
		(error) => {
			const message =
				(error.response
					&& error.response.data
					&& error.response.data.message)
				|| error.message
				|| error.toString();
			dispatch({
				type: LOGIN_FAIL,
			});
			dispatch({
				payload: message,
				type: SET_MESSAGE,
			});
			return Promise.reject();
		},
	);

export const logout = () => (dispatch) => {
	AuthService.logout();
	dispatch({
		type: LOGOUT,
	});
};
