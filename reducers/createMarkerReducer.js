import { default as types } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case types.CREATE_MARKER: {
			const newState = state.concat(action.payload);
			return newState;
		}
		default: {
			return state;
		}
	}
}
