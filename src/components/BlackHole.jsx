import React from 'react';

import 'styles/blackhole.scss';

class BlackHole extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="black-hole">
				{this.props.children}
			</div>
		)
	}
}

export default BlackHole;