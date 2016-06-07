'use strict';

import React from 'react';
import About from './About.jsx';

class Mountains extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let className = this.props.expanded ? 'mountains expanded' : 'mountains'

		return (
			<div className={className}>
				<About/>
			</div>
		)
	}

}

export default Mountains;