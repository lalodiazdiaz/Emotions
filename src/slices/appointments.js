import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import appointmentsService from '../services/Appointments/Appointments';

const initialState = [];

export const createAppointment = createAsyncThunk(
	'appointments/create',
	async ({ date, hour, idPacient, idUser }) => {
		const res = await appointmentsService.postappointments({
			date,
			hour,
			idPacient,
			idUser,
		});
		console.log(res);
		return res;
	},
);

const appointmentsSlice = createSlice({
	initialState,
	name: 'appointment',
	reducers: {
		[createAppointment.fulfilled]: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const appointmentsReducer = appointmentsSlice.reducer;
