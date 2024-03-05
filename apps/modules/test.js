const SET_TEST = "test/TEST";

export const setTest = defaultData => ({ type: SET_TEST, defaultData });

const initialState = {
	defaultData: ""
}

export default function test(state = initialState, action) {
	switch (action.type) {
		case SET_TEST:
		return {
			...state,
			defaultData: action.defaultData
		}
		
		default:
			return state
	}
}

