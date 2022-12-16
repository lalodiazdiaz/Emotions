import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { messageReducer } from './slices/message';

const store = configureStore({
	reducer: {
		auth: authReducer,
		message: messageReducer,
	},
});

export default store;
