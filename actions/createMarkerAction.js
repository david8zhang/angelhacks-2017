import { default as types } from './types';

export const createMarkerAction = (marker) => {
	return {
		type: types.CREATE_MARKER,
		payload: marker
	};
}
