import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import addPatientsService from '../services/AddPatients/addPatientsService';

const initialState = [];

export const createPatient = createAsyncThunk(
	'patients/create',
	async ({ name, middleName, lastName, email,
		phone, birthdate, maritalStatus, range }) => {
		const res = await addPatientsService.postPatients({
			birthdate,
			email,
			lastName,
			maritalStatus,
			middleName,
			name,
			phone,
			range,
		});
		return res;
	},
);

const patientsSlice = createSlice({
	initialState,
	name: 'patient',
	reducers: {
		[createPatient.fulfilled]: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const patientsReducer = patientsSlice.reducer;
