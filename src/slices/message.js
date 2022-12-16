import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const messageSlice = createSlice({
	initialState,
	name: 'message',
	reducers: {
		clearMessage: () => ({ message: '' }),
		setMessage: (state, action) => ({ message: action.payload }),
	},
});

export const { setMessage, clearMessage } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
