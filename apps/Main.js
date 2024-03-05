import React, { useEffect } from 'react';

const Main = () => {
	
	useEffect(() => {
		console.log("Main Component On")
	}, []);
	
	return (
		<div>
			Main Component
		</div>
	)
}

export default Main;