import axios from 'axios';
import * as constants from '../constants';

export const fetchMarkers = () => (
	axios.get(constants.pinURL).then((res) => {
		console.log('Res', res);
	}).catch((err) => {
		console.log('Err', err);
	})
);

export const createMarker = (marker) => (
	axios.post(constants.pinURL, marker).then((res) => {
		console.log('Res', res);
	}).catch((err) => {
		console.log('Err', err);
	})
);
