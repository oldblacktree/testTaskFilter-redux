import types from './actionTypes';

export function toggleDropDown(type) {
	return {
		type: types.TOGGLE_DROP_DOWN,
		payload: type,
	}
}

export function addDataFromServer(data) {
	return {
		type: types.ADD_DATA_FROM_SERVER,
		payload: data,
	}
}

export function toggleCheckbox(type, title) {
	return {
		type: types.TOGGLE_CHECKBOX,
		payload: {type, title},
	}
}

export function reset(type) {
	return {
		type: types.RESET,
		payload: type,
	}
}

export function resetAll() {
	return {
		type: types.RESET_ALL,
	}
}
export function submit() {
	return {
		type: types.SUBMIT,
	}
}

// export function busPopup(show_bus_id) {
// 	return {
// 		type: types.BUS_POPUP,
// 		show_bus_id: show_bus_id,
// 	}
// }