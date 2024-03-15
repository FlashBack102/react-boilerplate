import React, { useEffect } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../modules';
import content from '../resources/assets/styles/common.module.scss'

const UiTest = () => {

    const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const match = useMatch('/test'); // current url check

    const defaultData = useSelector<RootState>(state => state.test.defaultData)

    /*
	console.log("location: ", location);
	console.log("match: ", match);
	console.log("test match: ", useMatch('/main'));	
	console.log("navigate: ", navigate);
    */

	useEffect(() => {
		console.log("Test Component On")
        console.log("DefaultData: ", defaultData);
	}, [defaultData]);
	
	return (
		<div className={ content['test-component'] }>
			Test Component
		</div>
	)
}

export default UiTest;
