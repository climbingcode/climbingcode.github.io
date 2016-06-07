'use strict';

import React from 'react';

import Nav from 'components/layout/Nav.jsx'; 
import Mountains from 'components/Mountains.jsx';
import Footer from 'components/layout/Footer.jsx';
import About from 'components/About.jsx';
import Skills from 'components/Skills.jsx';
import Projects from 'components/Projects.jsx';
import Blog from 'components/Blog.jsx';
import ContactController from 'components/ContactController.jsx';
import Carousel from 'components/Carousel.jsx';
import BlackHole from 'components/BlackHole.jsx';
import SpaceInvaders from 'components/SpaceInvaders.jsx';
import ScrollingText from 'components/ScrollingText.jsx';
import Stars from 'components/Stars.jsx';

class DesktopApp extends React.Component {

	constructor(props) {
		super(props);
		// Default values
		this._renderIn = this._renderIn.bind(this);
		this.state = {
			mountains: false,
			carousel: false,
			blackHole: false,
			spaceInvaders: false,
			scrollingText: false
		}
	}

	_renderIn(parent, isOpen) {
		var statesObj = {};
		var states = Object.keys(this.state);
		states.forEach(function(key) {
			parent === key ? statesObj[key] = isOpen : statesObj[key] = false
		});
		this.setState(statesObj);
	}

	renderChildren() {

		if (this.state.mountains) {
			return 	(<Mountains 
						key="mountains"
						children={this.props.children} 
						expanded={this.state.mountains}
					/>);
		} else if (this.state.carousel) {
			return	[<Mountains 
						key="mountains"
					/>,
					<Carousel
						key="carousel"
						children={this.props.children}
						expanded={this.state.carousel}
					/>];

		} else if (this.state.spaceInvaders) {
			return	[<Mountains 
						key="mountains"
					/>,
					<SpaceInvaders
						key="space-invaders"
						children={this.props.children}
						expanded={this.state.carousel}
					/>];
		} else if (this.state.blackHole) {
			return	[<Mountains 
						key="mountains"
					/>,
					<BlackHole
						key="black-hole"
						children={this.props.children}
						expanded={this.state.carousel}
					/>];
		} else if (this.state.scrollingText) {
			return [ <Mountains 
						key="mountains"
					/>,
					<ScrollingText
						key="scrolling-text"
						children={this.props.children}
					/>
			]
		} else {
			return (<Mountains 
						key="mountains"
					/>);
		}
	}

	render() {

		var childrenNodes = this.renderChildren();

		return (

			<div className="desktop">
				<Nav renderIn={this._renderIn}/>
				<content>
					{ childrenNodes }			
				</content>
				<Footer/>
				<Stars/>
			</div>

		)
	}
}

export default DesktopApp;



