import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import getMarkersReducer from './getMarkersReducer';
import roomReducer from './roomReducer';

export default combineReducers({
	chat: chatReducer,
	markers: getMarkersReducer,
	rooms: roomReducer
});
