import React from 'react';
import DropDownSearch from './dropDownSearch';
import DropDownReset from './dropDownReset';
import DropDownItem from './dropDownItem';
import { connect } from 'react-redux';
import { toggleCheckbox, reset } from '../actions/filterActions'

class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				searchInput: '',
		}
	}

	handleChangeSearch = (e) => {
		this.setState({searchInput: e.target.value})
	}

	isVisible = (title) => {
		if (!this.props.haveSearch) return true;
		let isVisible = false;
		//title is arr
		title.forEach((item) => {
			if (item.indexOf(this.state.searchInput) !== -1) {
				isVisible = true;
			}
		})
		return isVisible
	}

  render() {
		const {  haveSearch, items, type, toggleCheckbox, reset } = this.props;

    return (
			<div className="dropDown">
				{ haveSearch ? <DropDownSearch value={this.state.searchInput} handleChangeSearch={this.handleChangeSearch}/> : null}
				<DropDownReset type={type} reset={reset} />
				<ul className="dropDown-list">
					{items.map((item, i) => {
						
						if (item.items && (item.items.length !== 0)) {
							const subItems = item.items.map((item, i) => {
								return <DropDownItem title={item.title} key={i} type ={type} isVisible={this.isVisible(item.title)} isChecked={item.isChecked} toggleCheckbox={toggleCheckbox}/>
							})

							return (
								<div key={i}>
									<DropDownItem title={item.title} key={i} type ={type} isVisible={this.isVisible(item.title)} isChecked={item.isChecked} toggleCheckbox={toggleCheckbox}/>
									<ul style={{paddingLeft: '20px'}}>
										{subItems}
									</ul>
								</div>
							)
						}

						return <DropDownItem title={item.title} key={i} type ={type} isVisible={this.isVisible(item.title)} isChecked={item.isChecked} toggleCheckbox={toggleCheckbox}/>
					})}
				</ul>
			</div>
    );
  }
}

export default connect(
	state => ({
		filterData: state.filterItemsData,
	}),
	dispatch => ({
		toggleCheckbox: (type, title) => {
			dispatch(toggleCheckbox(type, title))
		},
		reset: (type) => {
			dispatch(reset(type))
		},
		// setTimerTime: (time) => {
		// 	dispatch(setTimerTime(time))
		// },
	})
)(DropDown)