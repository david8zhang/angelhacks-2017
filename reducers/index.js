import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import getMarkersReducer from './getMarkersReducer';

export default combineReducers({
	chat: chatReducer,
	markers: getMarkersReducer
});
