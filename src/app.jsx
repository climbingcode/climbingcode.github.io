'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

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
import Stars from 'components/Stars.jsx';
import SpaceInvaders from 'components/SpaceInvaders.jsx';

// Fonts 
import 'styles/fonts/fonts.scss';

// StyleSheets
import 'styles/main.scss';


class Layout extends React.Component {

	constructor(props) {
		super(props);
		// Default values
		this._renderIn = this._renderIn.bind(this);
		this.state = {
			mountains: false,
			carousel: false,
			blackHole: false,
			spaceInvaders: false
		}
	}

	_renderIn(parent, isOpen) {
		var statesObj = {};
		var states = Object.keys(this.state);
		states.forEach(function(key) {
			if (parent === key) {
				statesObj[key] = isOpen
			} else {
				statesObj[key] = false;
			}
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
		} else {
			return (<Mountains 
						key="mountains"
					/>);
		}
	}

	render() {

		var childrenNodes = this.renderChildren();

		return (

			<div>
				<Nav renderIn={this._renderIn}/>
				<content>
					{ childrenNodes }			
				</content>
				<Stars/>
				<Footer/>
			</div>

		)
	}
}

render	(	
			<Router history={browserHistory}>
				<Route name="app" path="/" component={Layout}>
					<Route name="about" path="/about" component={About}/>
					<Route name="skills" path="/skills" component={Skills}/>	
					<Route name="projects" path="/projects" component={Projects}/>
					<Route name="blog" path="/blog" component={Blog}/>
					<Route name="contact" path="/contact" component={ContactController}/>
				</Route>
			</Router>, 
			document.getElementById('content') 
		);







