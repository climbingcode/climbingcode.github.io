'use strict';

import React from 'react';

class Mountains extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let className = this.props.expanded ? 'mountains expanded' : 'mountains'

		return (
			<div className={className}>
				{this.props.children}
			</div>
		)
	}

}

export default Mountains;