import React from 'react';

import Projects from 'components/Projects.jsx';

import content from 'config/content.json';
import 'styles/icons.scss';
import 'styles/carousel.scss';


class Carousel extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			imagesLength: content.projects.length
		};
	}

	_canImageMove(direction) {
		var currentIndex = this.state.currentIndex;
		var imagesLength = this.state.imagesLength;
		return direction ? currentIndex < imagesLength-1 : currentIndex > 0;
	}

	_moveToNextImage(direction) {
		if (!this._canImageMove(direction)) return;
		var newImageIndex = direction ? this.state.currentIndex+1 : this.state.currentIndex-1;
		this.setState({
			currentIndex: newImageIndex
		});
	}

	render() {

		return (
			<div className="carousel">
				<div className="arrow chevron left" onClick={this._moveToNextImage.bind(this, false)}/>
				<div className="viewPort">
					<Projects currentIndex={this.state.currentIndex}/>
				</div>
				<div className="arrow chevron right" onClick={this._moveToNextImage.bind(this, true)}/>
			</div>
		)
	}
	
}

export default Carousel;