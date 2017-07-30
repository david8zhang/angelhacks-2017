import { default as types } from '../actions/types';
import {
	partners
} from '../database';

const defaultState = partners;

export default (state = defaultState, action) => {
	switch (action.type) {
		case types.GET_PARTNERS: {
			return state;
		}
		default: {
			return state;
		}
	}
}
