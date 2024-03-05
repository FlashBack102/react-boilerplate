import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import Main from './Main';
import Test from './Test';
import { setTest } from './modules/test';

const App = () => {
	
	const dispatch = useDispatch()
	
	useEffect(() => {
		console.log("App.js On")
		dispatch(setTest("test data"))
	}, []);

	return (
		<BrowserRouter>
			<Routes> {/* Reaact 18.x version */}
				<Route exact path="/" element={ <Main /> } />
				<Route path="/main" element={ <Test /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App;