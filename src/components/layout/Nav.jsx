'use strict';

import React from 'react';
import { Link } from 'react-router';
import App from '../../app.jsx';

// StyleSheets 
import 'styles/nav.scss';

class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (			
			<nav>
				<div className="links">
					<Link to="about" onClick={this.props.renderIn.bind(this, 'mountains', true)}>About</Link>
					<Link to="skills" onClick={this.props.renderIn.bind(this, 'spaceInvaders', true)}>Skills</Link>
					<Link to="projects" onClick={this.props.renderIn.bind(this, 'carousel', true)}>Projects</Link>
					<Link to="blog" onClick={this.props.renderIn.bind(this, 'mountains', true)}>Blog</Link>
					<Link to="contact" onClick={this.props.renderIn.bind(this, 'blackHole', true)}>Contact</Link>
				</div>
				<div className="title">
					<h4>Thomas Davis</h4>
					<p>Web Developer	
					</p>
					<div className="icons">
						<a href="https://ca.linkedin.com/in/tom-davis-b19a7239" target="_blank">
							<span className="linkin"></span>
						</a>
						<a href="https://github.com/climbingcode" target="_blank">
							<span className="github"></span>
						</a>
					</div>
				</div>
			</nav>	
		)
	}

}

export default Nav;