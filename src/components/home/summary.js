import React from 'react';

export default class Summary extends React.Component {
	render () {
		console.log(this.props);

		return <div className="summary">
			Summary
		</div>;
	}
}