import { SET_MESSAGE, CLEAR_MESSAGE } from './types';

export const setMessage = (message) => ({
	payload: message,
	type: SET_MESSAGE,
});

export const clearMessage = () => ({
	type: CLEAR_MESSAGE,
});
