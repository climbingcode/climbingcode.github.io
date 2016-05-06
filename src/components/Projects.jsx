import React from 'react';

import content from 'config/content.json';

class Projects extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: content.projects
		};
	}

	render() {

		var project = this.state.projects[this.props.currentIndex];

		return (
			<div>
				<a href={project.link}>
					<h5>{project.title}</h5>
					<img src={project.imgSrc}/>
					<p>{project.description}</p>
				</a>
			</div>
		)
	}

}

export default Projects;