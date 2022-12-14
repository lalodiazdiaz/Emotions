import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import messageReducer from './reducers/message';

const reducer = {
	auth: authReducer,
	message: messageReducer,
};

const store = configureStore({
	reducer,
});

export default store;