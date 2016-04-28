'use strict';

import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (			
			<nav>
				<div class="links">
					<Link to="about">About</Link>
					<Link to="skills">Skills</Link>
					<Link to="projects">Projects</Link>
					<Link to="Blog">Blog</Link>
					<Link to="Contact">Contact</Link>
				</div>
				<div class="title">
					<h4>Thomas Davis</h4>
					<p>Web Developer</p>
				</div>
			</nav>	
		)
	}

}

export default Nav;