/* eslint-disable default-case */
import { combineReducers } from "redux";
import types from '../actions/actionTypes';
import filter from "../components/filter";

//RootReducer это и есть представление нашего state
// const rootReducer = combineReducers({
// });
const initialState = {
	filterItemsData: [
		{	type: 'card',
			isOpen: false,
			items: [],
		},
		{	type: 'cardNumber',
			isOpen: false,
			items: [],
		},
		{	type: 'carOrCarOwner',
			isOpen: false,
			items: [],
		},
		{	type: 'fuelAndAdditionalServices',
			isOpen: false,
			items: [],
		},
		{	type: 'Programm',
			isOpen: false,
			items: [],
		},
		{	type: 'gasStations',
			isOpen: false,
			items: [],
		},
	],
}


const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.TOGGLE_DROP_DOWN:
			return { ...state, filterItemsData: state.filterItemsData.map((filterItem) => {
				if (filterItem.type === action.payload) {
					const newFilterItem = {...filterItem, isOpen: !filterItem.isOpen}
					return newFilterItem;
				}
				return filterItem
			}) 
		};

		case types.TOGGLE_CHECKBOX:
			return { ...state, filterItemsData: state.filterItemsData.map((filterItem) => {
				if (filterItem.type === action.payload.type) {
					//нашли наш FilterItem, нужно найти конкретный FilterItem.items - array
					return {...filterItem, items: filterItem.items.map((item) => {
						if (item.title[0] === action.payload.title[0]) {
							return {...item, isChecked: !item.isChecked}
						}
						return item
					})}
				}
					return filterItem
				})
			}

		case types.RESET:
				return { ...state, filterItemsData: state.filterItemsData.map((filterItem) => {

				if (filterItem.type === action.payload) {
					return {...filterItem, items: filterItem.items.map((item) => {
							return {...item, isChecked: false}
					})}
				}
					return filterItem
				})
			}

		case types.RESET_ALL:
			return { ...state, filterItemsData: state.filterItemsData.map((filterItem) => {
					return {...filterItem, isOpen: false, items: filterItem.items.map((item) => {
							return {...item, isChecked: false}
					})}
				})
			}

		case types.SUBMIT:
			state.filterItemsData.forEach((filterItem) => {
				const checkedItems = filterItem.items.filter((item) => {
					if (item.isChecked) return item.title.toString()
				})
				const newArr = checkedItems.map((item) => item.title.toString())

				console.log(`${filterItem.type}: ${newArr}`)
			})

			return { ...state}


		case types.ADD_DATA_FROM_SERVER:
			const filterDataFromServer = action.payload.filterData;
			
			const newFilterItem = state.filterItemsData.map((filterItem) => {
				const type = filterItem.type;
				const itemsFromServer = filterDataFromServer.find((item) => {
					return item.type === type
				}).items;


				return {...filterItem, items: itemsFromServer}
			})

			//add isChecked
			newFilterItem.map((item) => {
				let newItem = item.items.map((item) => {
					item.isChecked = false;
					//
					if (item.items) {
						item.items.forEach((item) => {
							item.isChecked = false;
						})
					}
					return item
				})
				return newItem
			})

			return {...state, filterItemsData:newFilterItem}
	}
	return state;
}

export default rootReducer;


