import React from 'react';

export default class DropDownReset extends React.Component {

  handleClick = () => {
    this.props.reset(this.props.type)
  }

  render() {
    return (
			<a href="#" className="dropDown-reset" onClick={this.handleClick}>Сбросить</a>
    );
  }
}

