import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import logger from 'redux-logger';

import App from './App';
import rootReducer from './modules'

// const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(
// 		applyMiddleware(thunk, logger)
// 	)
// );

const test = composeWithDevTools(
	applyMiddleware(thunk, logger)
)

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk)
})

createRoot(
	document.getElementById('main')
).render(
	<Provider store={ store }>
		<App />
	</Provider>
);