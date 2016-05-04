import React from 'react';

import content from 'config/content.json';

class Projects extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			images: content.projects.images
		};
	}

	render() {

		var imgSrc = this.state.images[this.props.currentIndex];

		return (
			<img src={imgSrc}/>
		)
	}

}

export default Projects;