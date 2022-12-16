import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import AuthService from '../services/Login/loginService';

const user = JSON.parse(localStorage.getItem('user'));

export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const data = await AuthService.login(email, password);
			return { user: data };
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

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null };

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
		},
		[login.rejected]: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

export const authReducer = authSlice.reducer;
