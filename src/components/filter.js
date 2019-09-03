import React from 'react';
import FilterItem from './filterItem';
import FilterToggler from './filterToggler';
import Button from './button';
import Calendar from './calendar';
import { connect } from 'react-redux';
import { modelData } from '../reducers/dataFromServer';
import { addDataFromServer, resetAll, submit } from '../actions/filterActions'

class Filter extends React.Component {

	componentDidMount() {
		//имитация запроса на сервер
		const promise = new Promise((resolve, reject) => {
			resolve(modelData);
		})
		promise.then((response) => {
			this.props.addDataFromServer(response);
		})
	}

	handleClickResetAll = () => {
		this.props.resetAll();
	}


  render() {
    return (
			<div className="filter">
				<FilterItem>
					<FilterToggler>
						<Calendar />
					</FilterToggler>
				</FilterItem>
				<FilterItem>
					<FilterToggler type="card"/>
				</FilterItem>
				<FilterItem>
					<FilterToggler 
						type="cardNumber" 
						haveSearch={true}/>
				</FilterItem>
				<FilterItem>
					<FilterToggler 
						type="carOrCarOwner"
						haveSearch={true}/>
				</FilterItem>
				<FilterItem>
					<FilterToggler 
						type="fuelAndAdditionalServices"/>
				</FilterItem>
				<FilterItem>
					<FilterToggler type="Programm"/>
				</FilterItem>
				<FilterItem >
					<FilterToggler 
						type="gasStations"
						haveSearch={true}/>
				</FilterItem>
				<FilterItem style={{justifyContent: 'space-around'}}>
					<a href="#" onClick={this.handleClickResetAll}>Сбросить</a>
					<Button
						title = 'Применить' onClick={this.props.submit}/>
				</FilterItem>
			</div>
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
		addDataFromServer: (data) => {
			dispatch(addDataFromServer(data))
		},
		resetAll: () => {
			dispatch(resetAll())
		},
		submit: () => {
			dispatch(submit())
		},
	})
)(Filter)