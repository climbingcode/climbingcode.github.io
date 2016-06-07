import React from 'react';

import SETTINGS from 'config/content.json';

import About from 'components/About.jsx';
import Skills from 'components/Skills.jsx';
import Projects from 'components/Projects.jsx';
import Blog from 'components/Blog.jsx';
import ContactController from 'components/ContactController.jsx';
import Carousel from 'components/Carousel.jsx';
import BlackHole from 'components/BlackHole.jsx';
import SpaceInvaders from 'components/SpaceInvaders.jsx';

import 'styles/mobile/main.scss';

class MobileApp extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			carousel: false
		}
	}

	render() {

		var skill = SETTINGS.skills.map((skill, index) => {
			return  (<Skills key={index} skill={skill}/>);
		});

		return (
			<div className="mobile">
				<About/>
				<Carousel
					children={this.props.children}
					expanded={this.state.carousel}/>
				<div className="skills-container">
					{skill}
				</div>
			</div>
		)
	}
}

export default MobileApp;