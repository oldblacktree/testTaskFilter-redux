import React from 'react';

export default class FilterItem extends React.Component {

  render() {
    return (
			<div className="filter-item" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}