import { default as types } from './types';

export const joinRoomAction = (room) => {
	return {
		type: types.JOIN_ROOM,
		payload: room
	};
}