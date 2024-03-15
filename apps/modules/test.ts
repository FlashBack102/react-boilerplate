const SET_TEST = "test/TEST" as const;

export const setTest = (defaultData: string) => ({ type: SET_TEST, defaultData });

type ActionType = 
	ReturnType<typeof setTest>

const initialState = {
	defaultData: ""
}

export default function test(state = initialState, action: ActionType) {
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

