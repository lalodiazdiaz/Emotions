import { createAsyncThunk } from '@reduxjs/toolkit';
import addPatientsService from '../services/AddPatients/addPatientsService';
import { setMessage } from './message';

export const createPatient = createAsyncThunk(
	'patients/create',
	async ({ form }, thunkAPI) => {
		try {
			const data = await addPatientsService.postPatients(form);
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

export default createPatient;
