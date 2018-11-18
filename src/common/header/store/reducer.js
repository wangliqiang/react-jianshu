import {
	actionTypes
} from './index';

const defaultState = {
	focused: false
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_FOCUS:
			return {
				focused: true
			}
		case actionTypes.SEARCH_BLUR:
			return {
				focused: false
			}
		default:
			return state;
	}
}