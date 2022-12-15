import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const messageSlice = createSlice({
	initialState,
	name: 'message',
	reducers: {
		setMessage: (state, action) => ({ message: action.payload }),
		clearMessage: () => ({ message: '' }),
	},
});

export const { setMessage, clearMessage } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
