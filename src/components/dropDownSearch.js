import React from 'react';

export default class DropDownSearch extends React.Component {

  handleChange = (e) => {
    this.props.handleChangeSearch(e);
  }

  render() {
    const { value} = this.props;
    return (
			<div className="dropDown-search">
				<input 
          className="dropDown-search__input" 
          type="text" 
          placeholder="Найти..." 
          value={value}
          onChange={this.handleChange}></input>
			</div>
    );
  }
}