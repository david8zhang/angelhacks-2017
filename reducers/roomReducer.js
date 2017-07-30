import { default as types } from '../actions/types';
import {
	rooms
} from '../database';

const defaultState = rooms;

export default (state = rooms, action) => {
	switch (action.type) {
		case types.JOIN_ROOM: {
			const newState = state.concat(action.payload);
			return newState;
		}
		case types.GET_ROOMS: {
			return state;
		}
		default: {
			return state;
		}
	}
}
