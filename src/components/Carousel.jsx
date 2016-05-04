import React from 'react';

import 'styles/carousel.scss';
import Projects from 'components/Projects.jsx';

class Carousel extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			imagesLength: 4
		};
	}

	_imagesCanMove(direction) {
		var currentIndex = this.state.currentIndex;
		var imagesLength = this.state.imagesLength;
		return direction ? currentIndex < imagesLength-1 : currentIndex > 0;
	}

	_moveToNextImage(direction) {
		if (!this._imagesCanMove(direction)) return;
		var newImageIndex = direction ? this.state.currentIndex+1 : this.state.currentIndex-1;
		this.setState({
			currentIndex: newImageIndex
		});
	}

	render() {

		return (
			<div className="carousel">
				<div className="arrow" onClick={this._moveToNextImage.bind(this, false)}>
					<i class="fa fa-chevron-left" aria-hidden="true"></i>
				</div>
				<div className="viewPort">
					<Projects currentIndex={this.state.currentIndex}/>
				</div>
				<div className="arrow" onClick={this._moveToNextImage.bind(this, true)}>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</div>
			</div>
		)
	}
	
}

export default Carousel;