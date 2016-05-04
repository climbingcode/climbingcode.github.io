import React from 'react';

import content from 'config/content.json';

import 'styles/about.scss'

class About extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="about">
				<p>{content.about.description}</p>
			</div>
		)
	}

}

export default About;