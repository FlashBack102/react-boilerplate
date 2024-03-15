import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { setTest } from './modules/test';
import UiMain from './ui/UiMain';
import UiTest from './ui/UiTest';

const App = () => {
	
	const dispatch = useDispatch()
	
	useEffect(() => {
		console.log("App.js On")
		dispatch(setTest("test data"))
	}, []);

	return (
		<BrowserRouter>
			<Routes> {/* Reaact 18.x version */}
				<Route path="/" element={ <UiMain /> } />
				<Route path="/test" element={ <UiTest /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App;