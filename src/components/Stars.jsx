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

	_isOutOfBounds(shootingStar) {
		return shootingStar.offsetLeft > document.body.clientWidth;
	}

	_shootingStar() {
		this.shootingStars = setInterval(() => {
			let shootingStar = document.createElement('div');
			let starY = Math.random()*window.innerHeight;
			let starX = 0;
			shootingStar.className  = 'star shooting-star';
			shootingStar.style.left = starX;
			shootingStar.style.top  = starY + 'px';
			this.refs.stars.appendChild(shootingStar);
			var moveShootingStar = setInterval(() => {
				shootingStar.style.left = (starX+=5) + 'px';
				shootingStar.style.top  = (starY+=1) + 'px';
				if (this._isOutOfBounds(shootingStar)) {
					clearInterval(moveShootingStar);
					shootingStar.parentNode.removeChild(shootingStar);
				}
			}, 10);
		}, 3000);
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