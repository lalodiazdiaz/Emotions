import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { messageReducer } from './slices/message';
import { appointmentsReducer } from './slices/appointments';

const store = configureStore({
	reducer: {
		appointments: appointmentsReducer,
		auth: authReducer,
		message: messageReducer,
	},
});

export default store;
