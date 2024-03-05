import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import logger from 'redux-logger';
// import ReactDOM from 'react-dom';

import App from './App';
import rootReducer from './modules'

/*
const mainElement = document.createElement('div');
mainElement.className= ' main';
document.body.appendChild(mainElement);

ReactDOM.render(
	<App />, mainElement
);
*/

const store = createStore(
	rootReducer,
	composeWithDevTools(
		// applyMiddleware(...middleware),
		applyMiddleware(thunk, logger)
	)
)

createRoot(
	document.getElementById('main')
).render(
	<Provider store={ store }>
		<App />
	</Provider>
);

// ReactDOM.createRoot(
// 	document.getElementById('main'),
// ).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// )



// const root = ReactDOM.createRoot(document.getElementById('main'));
// root.render(
// 	<App />
// )
