import React from 'react';

import 'styles/stars.scss';

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
		while (i < 100) {
			let starX = Math.random()*window.innerWidth;
			let starY = Math.random()*window.innerHeight;
			let starStyle = {top: starY, left: starX};
			let star  = (<i className="star" key={i} style={starStyle}></i>)
			stars.push(star)
			i++;
		}
		return stars;
	}

	_isOutOfBounds(shootingStar) {
		return shootingStar.offsetLeft > document.body.clientWidth;
	}

	_shootingStar() {
		this.shootingStars = setInterval(() => {
			let shootingStar 		  = document.createElement('div');
			let shootingStarContainer = document.createElement('div');
			let starY 				  = Math.random()*window.innerHeight;
			let containerHeight       = starY / 3;
			shootingStarContainer.className = 'shooting-star-container';
			shootingStarContainer.style.height = containerHeight + 'px'; 
			shootingStarContainer.style.top  = starY + 'px';
			shootingStar.className  = 'star move';
			shootingStarContainer.appendChild(shootingStar);
			this.refs.stars.appendChild(shootingStarContainer);
			setTimeout(() => {
				shootingStarContainer.parentNode.removeChild(shootingStarContainer);
			}, 4000);
		}, 5000);
	}

	componentDidMount() {
		this._shootingStar();
	}

	componentWillUnmount() {
		clearInterval(this.shootingStars);
	}

	render() {
		return (
			<div className="stars" ref="stars">
				{this._getStars.call(this)}
			</div>
		)
	}

}

export default Stars;