import React from 'react';

class Stars extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			maxStars: 100
		}
	}

	_getStars() {
		var i = 0;
		var stars = [];
		while (i < this.state.maxStars) {
			let starX = Math.random()*window.innerWidth;
			let starY = Math.random()*window.innerHeight;
			let starStyle = {top: starY, left: starX};
			let star  = (<i className="star" key={i} style={starStyle}></i>)
			stars.push(star)
			i++;
		}
		return stars;
	}

	render() {
		return (
			<div className="stars">
				{this._getStars.call(this)}
			</div>
		)
	}

}

export default Stars;