import React, { useEffect } from 'react';

const Test = () => {
	
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