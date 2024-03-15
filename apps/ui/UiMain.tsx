import React, { useEffect } from 'react';

const UiMain = () => {
	
	useEffect(() => {
		console.log("Main Component On")
	}, []);
	
	return (
		<div className={ `test-component` }>
			Main Component
		</div>
	)
}

export default UiMain;