'use strict';

import React from 'react';
import DesktopApp from './DesktopApp.jsx';
import MobileApp from './MobileApp.jsx';

// Router
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


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			viewPort: "desktop",
			mobileSize: 768
		}
	}

	mobileOrDesktop() {
		var windowWidth = window.innerWidth;
		var medium = windowWidth > this.state.mobileSize ? 'desktop' : 'mobile';
		console.log(medium);
		this.setState({
			viewPort: medium
		});
	}

	componentDidMount() {
		window.addEventListener('load', this.mobileOrDesktop.bind(this), false);
		window.addEventListener('resize', this.mobileOrDesktop.bind(this), false);
	}

	render() {

		// display correct app based on size of screen

		var viewPortApp = this.state.viewPort === 'desktop' ? <DesktopApp/> : <MobileApp/>

		return (
			<content>
				<Stars/>
				{viewPortApp}
			</content>

		)

	}
}

render	(	
			<Router history={browserHistory}>
				<Route name="app" path="/" component={App}>
					<Route name="about" path="/about" component={About}/>
					<Route name="skills" path="/skills" component={Skills}/>	
					<Route name="projects" path="/projects" component={Projects}/>
					<Route name="blog" path="/blog" component={Blog}/>
					<Route name="contact" path="/contact" component={ContactController}/>
				</Route>
			</Router>, 
			document.getElementById('content') 
		);










