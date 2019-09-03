import React from 'react';
import { connect } from 'react-redux';

class DropDownIten extends React.Component {
	handleChange = () => {
		this.props.toggleCheckbox(this.props.type, this.props.title)
	}

  render() {
		
    return (
			<li className={`dropDown-list__item${(this.props.isVisible === false)? '--none' : ''}`}>
				<label>

					<input type="checkbox" checked={this.props.isChecked} onChange={this.handleChange}/>
					{this.props.title.map((titleItem,i) => {
						return <span key={i}>{titleItem}</span>
					})}
				</label>
			</li>
    );
  }
}

export default connect(
	state => ({
		filterData: state.filterItemsData,
	}),
	dispatch => ({
		// setTimer: (active) => {
		// 	dispatch(setTimer(active))
		// },
		// setTimerTime: (time) => {
		// 	dispatch(setTimerTime(time))
		// },
	})
)(DropDownIten)