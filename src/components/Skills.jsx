import React from 'react';

import 'styles/skills.scss'

class Skills extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var skill = this.props.skill;

		var divStyle = {
			backgroundPosition: skill.backgroundPosition,
			height: skill.height,
			width: skill.width
		};

		return (
			<div className="skills" style={divStyle}>
			</div>
		)
	}

}

export default Skills;