import { default as types } from './types';
import {
	markers
} from '../database';

export const getMarkersAction = () => {
	return {
		type: types.GET_MARKERS,
		payload: markers
	};
}