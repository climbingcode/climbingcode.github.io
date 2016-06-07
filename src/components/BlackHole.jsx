import React from 'react';

import 'styles/blackhole.scss';

import ContactController from './ContactController.jsx';

class BlackHole extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="black-hole">
				<ContactController/>
			</div>
		)
	}
}

export default BlackHole;