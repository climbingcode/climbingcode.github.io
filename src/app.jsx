'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Nav from 'components/layout/Nav.jsx'; 
import Footer from 'components/layout/Footer.jsx';
import About from 'components/About.jsx';

class Layout extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<Nav/>
				{this.props.children}
				<Footer/>
			</section>
		)
	}
}

render(	<Router history={browserHistory}>
			<Route name="app" path="/" component={Layout}>
				<Route name="about" path="about" component={About}/>
			</Route>
		</Router>, document.getElementById('content') );







