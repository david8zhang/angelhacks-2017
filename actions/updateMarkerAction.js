import { default as types } from './types';

export const updateMarkerAction = (update) => {
	return {
		type: types.UPDATE_MARKER,
		payload: update
	};
}
