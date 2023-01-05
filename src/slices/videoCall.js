import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));

// export const startVideo = createAsyncThunk(
// 	'videoCall/startVideo',
// 	async(currentStream) => {

// 	}
// );

const initialState = (
	user
		? {
			call: {},
			callAccepted: false,
			callEnded: false,
			connectionRef: null,
			me: '',
			name: '',
			stream: null,
			userVideo: null,
		} : {
			call: null,
			callAccepted: null,
			callEnded: null,
			connectionRef: null,
			me: null,
			name: null,
			stream: null,
			userVideo: null,
		}
);

const videoCallSlice = createSlice({
	initialState,
	name: 'videoCall',
	reducers: {
		acceptCall: (state, action) => {
			state.callAccepted = action.payload;
		},
		connectionRef: (state, action) => {
			state.connectionRef = action.payload;
		},
		endCall: (state, action) => {
			state.callEnded = action.payload;
		},
		me: (state, action) => {
			state.me = action.payload;
		},
		name: (state, action) => {
			state.name = action.payload;
		},
		peopleOnCall: (state, action) => {
			state.call = action.payload;
		},
		stream: (state, action) => {
			state.stream = action.payload;
		},
		userVideo: (state, action) => {
			state.userVideo = action.payload;
		},
	},
});

export const videoCallReducer = videoCallSlice.reducer;
export const videoCallActions = videoCallSlice.actions;
