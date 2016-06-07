import React from 'react';
import Blog from 'components/Blog.jsx';
import 'styles/scrollingText.scss';

class ScrollingText extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="scrolling-text" ref="scrollingContainer">
				<Blog/>
			</div>
		)
	}

}

export default ScrollingText;