import React, { useEffect } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';

const Test = () => {

	const navigate = useNavigate();
	const location = useLocation();
	const match = useMatch('/test'); // current url check

	console.log("location: ", location);
	console.log("match: ", match);
	console.log("test match: ", useMatch('/main'));	
	console.log("navigate: ", navigate);

	useEffect(() => {
		console.log("Test Component On")
	}, []);
	
	return (
		<div>
			Test Component
		</div>
	)
}

export default Test;
