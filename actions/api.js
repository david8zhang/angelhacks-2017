import axios from 'axios';
import * as constants from '../constants';
import * as actions from './index';
import { store } from '../store';

export const fetchMarkers = () => (
	axios.get(constants.pinURL).then((res) => {
		const { data } = res;
		const getPinAction = actions.getMarkersAction(data);
		store.dispatch(getPinAction);
	}).catch((err) => {
		console.log('Err', err);
	})
);

export const createMarker = (marker) => (
	axios.post(constants.pinURL, marker).then(() => {
		const createMarkerAction = actions.createMarkerAction(marker);
		console.log('Marker', marker);
		store.dispatch(createMarkerAction);
	}).catch((err) => {
		console.log('Err', err);
	})
);

export const joinRoom = (marker) => {
	const { id } = marker;
	return axios.patch(`${constants.pinURL}/${id}`, marker).then((res) => console.log('PATCH', res));
};
