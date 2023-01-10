import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import appointmentsService from '../services/Appointments/Appointments';

const user = JSON.parse(localStorage.getItem('user'));

export const appointments = createAsyncThunk(
	'auth/appointments',
	async ({ idUser, idPatient, date }, thunkAPI) => {
		try {
			const data = await appointmentsService.postappointments(idUser, idPatient, date);
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

const appointmentsSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		[appointments.fulfilled]: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
		},
		[appointments.rejected]: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

export const appointmentsReducer = appointmentsSlice.reducer;
