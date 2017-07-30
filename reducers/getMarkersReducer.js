import { default as types } from '../actions/types';
import {
	markers
} from '../database';

const defaultState = markers;

export default (state = defaultState, action) => {
	switch (action.type) {
		case types.GET_MARKERS: {
			return state;
		}
		case types.UPDATE_MARKER: {
			let newState = JSON.parse(JSON.stringify(state));

			newState[action.payload.id] = action.payload;

			return newState;
		}
		default: {
			return state;
		}
	}
}
