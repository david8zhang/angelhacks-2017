import { default as types } from './types';

export const getRoomsAction = () => {
	return {
		type: types.GET_ROOMS,
		payload: {}
	};
}