import { default as types } from './types';

export const getMarkersAction = (markers) => {
	return {
		type: types.GET_MARKERS,
		payload: markers
	};
};
