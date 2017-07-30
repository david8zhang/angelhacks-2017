import { default as types } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case types.GET_MARKERS: {
			return action.payload;
		}
		case types.UPDATE_MARKER: {
			const newState = [];
			state.forEach((marker) => {
				const { id } = marker;
				const newMarker = { ...marker };
				if (id === action.payload.id) {
					newMarker.joined = true;
				}
				newState.push(newMarker);
			});
			return newState;
		}
		case types.CREATE_MARKER: {
			let newState = JSON.parse(JSON.stringify(state));

			let newData = action.payload;
			newData.id = newState.length;

			return newState.concat(newData);
		}
		default: {
			return state;
		}
	}
}
