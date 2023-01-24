import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deletePsychologist,
	getAllPsychologist } from '../services/Psychologist/psychologistService';
import { setMessage } from './message';

export const getTherapist = createAsyncThunk(
	'auth/allPsychologist',
	async ({ params }, thunkAPI) => {
		try {
			const data = await getAllPsychologist(params);
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

export const deleteTherapist = createAsyncThunk(
	'auth/deletePsychologist',
	async ({ id }, thunkAPI) => {
		try {
			const data = await deletePsychologist(id);
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
