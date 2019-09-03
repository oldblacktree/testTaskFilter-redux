import React from 'react';

export default class Button extends React.Component {
	handleClick = (e) => {
		 e.preventDefault();
     this.props.onClick();
	}

  render() {
    return (
			<button className="button" onClick={this.handleClick}>
        {this.props.title}
      </button>
    );
  }
}