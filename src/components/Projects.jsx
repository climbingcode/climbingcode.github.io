import React from 'react';

import content from 'config/content.json';

import 'styles/project.scss';

class Projects extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: content.projects
		};
	}

	render() {

		var project = this.state.projects[this.props.currentIndex];

		var style = {
			backgroundPosition: project.backgroundPosition
		};

		return (
			<div className="project">
				<a href={project.link}>
					<h5>{project.title}</h5>
					<div style={style} className="image">
						<p>{project.description}</p>
					</div>
				</a>
			</div>
		)
	}

}

export default Projects;