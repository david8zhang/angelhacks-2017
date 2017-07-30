import { default as types } from './types';

export const getMarkersAction = () => {
	return {
		type: types.GET_MARKERS,
		payload: {}
	};
}