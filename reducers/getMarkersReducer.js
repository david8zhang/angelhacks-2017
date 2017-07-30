import { default as types } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case types.GET_MARKERS: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}