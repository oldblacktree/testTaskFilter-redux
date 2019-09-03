/* eslint-disable default-case */
import React from 'react';
import DropDown from './dropDown';
import { connect } from 'react-redux';
import { toggleDropDown } from '../actions/filterActions'

class FilterToggler extends React.Component {

  getTitle = () => {
    const { type } = this.props
    let checkedItems = 0;
    let title = ''
    const filterItem = this.props.filterItemsData.find((item) => item.type === type);
    if (filterItem) {
      checkedItems = filterItem.items.filter((item) => item.isChecked)
    }

    switch (type) {
      case "card":
        switch (checkedItems.length) {
          case 0:
            return "Тип карты";
          case 1: 
            return checkedItems[0].title;
          default:
            return  `Карты (${checkedItems.length})`;
        }
      case "cardNumber":
        switch (checkedItems.length) {
          case 0:
            return "Выберите карту";
          case 1: 
            return checkedItems[0].title;
          default:
            return  `Карты (${checkedItems.length})`;
        }
      case "carOrCarOwner":
        switch (checkedItems.length) {
          case 0:
            return "Выберите водителя или ТС ";
          case 1: 
            return checkedItems[0].title;
          default:
            return  `Водители или ТС (${checkedItems.length})`;
        }
      case "fuelAndAdditionalServices":
        switch (checkedItems.length) {
          case 0:
            return "Топливо и доп услуги";
          case 1: 
            return checkedItems[0].title;
          default:
            return  `Топливо и услуги (${checkedItems.length})`;
        }
      case "Programm":
        switch (checkedItems.length) {
          case 0:
            return "Программа, сеть";
          case 1: 
            return checkedItems[0].title;
          default:
            return  `Программа (${checkedItems.length}), сеть (${checkedItems.length})`;
        }
      case "gasStations":
        switch (checkedItems.length) {
          case 0:
            return "Выберите АЗС";
          case 1: 
            return checkedItems[0].title;
          default:
            return  `АЗС (${checkedItems.length})`;
        }
    }
  }

  handleClick = () => {
    this.props.toggleDropDown(this.props.type)
  }

  render() {
  const {children, type, filterItemsData} = this.props;
  const filterItem = filterItemsData.find((filterItem) => type === filterItem.type);
  

    return (
      <>
        <div className="filter-toggler" onClick={this.handleClick}>
          <span>{this.getTitle()}</span>
          {children}
        </div>
        {filterItem && filterItem.isOpen 
          ? <DropDown 
              type = {type}
              haveSearch={this.props.haveSearch}
              items={filterItem.items}
            /> 
          : null}
      </>
    );
  }
}

export default connect(
	state => ({
		filterItemsData: state.filterItemsData,
		// order: state.order,
		// user: state.user,
	}),
	dispatch => ({
    toggleDropDown: (type) => {
      dispatch(toggleDropDown(type))
    }

		// setTimer: (active) => {
		// 	dispatch(setTimer(active))
		// },
		// setTimerTime: (time) => {
		// 	dispatch(setTimerTime(time))
		// },
	})
)(FilterToggler)



