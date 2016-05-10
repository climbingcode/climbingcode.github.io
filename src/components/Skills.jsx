import React from 'react';

import 'styles/skills.scss'

class Skills extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var skill = this.props.skill;

		var skillStyle = {
			backgroundPosition: skill.backgroundPosition,
			height: skill.height,
			width: skill.width
		};

		return (
			<div className="skills" style={skillStyle}>
				<div className="skill-meter">
					<div data-score={skill.score}></div>
				</div>
			</div>
		)
	}

}

export default Skills;