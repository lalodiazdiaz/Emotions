import { createAsyncThunk } from '@reduxjs/toolkit';
import logOutSession from '../services/Logout/LogoutService';
import { setMessage } from './message';

const logout = createAsyncThunk(
	'auth/logout',
	async (thunkAPI) => {
		try {
			const data = await logOutSession();
			return data;
		} catch (error) {
			const message =
				(error.response
					&& error.response.data
					&& error.response.data.message)
				|| error.message
				|| error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	},
);

export default logout;
