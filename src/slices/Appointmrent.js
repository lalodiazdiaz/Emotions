import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNextAppointment,
	 deleteAppointment } from '../services/Appointments/appointmentsService';
import { setMessage } from './message';

export const getappointment = createAsyncThunk(
	'auth/appointments',
	async ({ params }, thunkAPI) => {
		try {
			const data = await getNextAppointment(params);
			return data.data;
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

export const deleteAppoitnment = createAsyncThunk(
	'auth/appointments',
	async ({ id }, thunkAPI) => {
		try {
			const data = await deleteAppointment(id);
			return data.data;
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

export default getappointment;
