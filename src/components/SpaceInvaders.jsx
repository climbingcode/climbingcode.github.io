import React from 'react';
import Skills from 'components/Skills.jsx';
import SETTINGS from 'config/content.json';
import 'styles/space_invaders.scss';

import lazerSoundFile from 'sounds/lazer.wav';

var lazerSound = new Audio(lazerSoundFile);

class SpaceInvaders extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			mute: false
		}
	}

	hitBorder(direction, element, offSetMargin) {
		if (direction === 'left') {
			return element.offsetLeft > (window.innerWidth-element.clientWidth-offSetMargin);
		} else {
			return element.offsetLeft < offSetMargin;
		}
	}

	moveInvaders() {
		var invaders = this.refs.invaders;
		var moveXBy = 5;
		var moveYBy = 25;
		var left = 0;
		var top = 100;
		this.direction = 'left';
		this.movingInvaders = setInterval(function() {
			if (this.hitBorder(this.direction, invaders, 10)) {
				// invaders.style.top = (top+= moveYBy) + 'px';
				this.direction = this.direction === 'left' ? 'right' : 'left';
			} else {
				if (this.direction === 'left') {
					invaders.style.left = (left+=moveXBy) + 'px';
				} else {
					invaders.style.left = (left-=moveXBy) + 'px';
				}
			}
		}.bind(this), 100);
	}

	hasCollided(invader, bullet) {

		var bulletsTop 	   	= bullet.offsetTop,
		bulletsLeft			= bullet.offsetLeft,

		invaderParent		= invader.parentNode,
		invaderParentLeft   = invaderParent.offsetLeft,
		invaderParentTop	= invaderParent.offsetTop,
		invaderTop			= invaderParentTop + invader.offsetTop,
		invaderBottom 		= invaderTop + invader.clientHeight,
		invaderBottomLeft   = invaderParentLeft + invader.offsetLeft,
		invaderBottomRight  = invaderBottomLeft + invader.clientWidth;

		return 	(bulletsLeft > invaderBottomLeft) 
				&& (bulletsLeft < invaderBottomRight)
				&& (bulletsTop < invaderBottom) 
				&& (invader.className.indexOf('hit') === -1)

	}

	collison(bullet) {
		
		var collided = false;

		this.invaders.forEach(function(invader, index) {
			
			var invader = this.refs[invader];	
			
			if (this.hasCollided(invader, bullet)) {
				let skillMeter = invader.getElementsByTagName('div')[2];
				let skillScore = skillMeter.dataset.score;
				skillMeter.style.width = (skillScore + '%');
				invader.className = 'invader hit';
				collided = true;
			}

		}.bind(this));

		return collided;

	}

	shotGun(left) {
		var bottom = this.refs.gun.clientHeight;
		var bullet = document.createElement('div');
		bullet.className 	= 'bullet';
		bullet.style.left 	= left + (this.refs.gun.clientWidth/2) + 'px';
		bullet.style.bottom = this.refs.gun.clientHeight + 'px';
		this.refs.container.appendChild(bullet);
		if (!this.state.mute) lazerSound.play();
		var moveBullet = setInterval(function() {
			bullet.style.bottom = (bottom+=10) + 'px';
			if (Math.abs(bottom) > window.innerHeight 
				|| this.collison.call(this, bullet)) {
				clearInterval(moveBullet);
				bullet.parentNode.removeChild(bullet);
			}
		}.bind(this), 50);
	}

	initGun() {

		var top  	= 0;
		var left 	= window.innerWidth/2;
		var gun 	= this.refs.gun;
		var moveBy	= 20;

		var ARROWS = SETTINGS.INVADERS.ARROWS;

		gun.style.left = window.innerWidth/2 + 'px';

		document.onkeydown = function(e) {

			var e = e || window.event;

			if (e.keyCode == ARROWS.UP || e.keyCode == ARROWS.SPACE) {
    			this.shotGun.call(this, left);
    		}
		    else if (e.keyCode == ARROWS.RIGHT) {
		    	if (this.hitBorder('left', gun, 70)) return;
		        gun.style.left = (left+=moveBy) + 'px';
		    }
		    else if (e.keyCode == ARROWS.LEFT) {
		    	if (this.hitBorder('right', gun, 70)) return;
		    	gun.style.left = (left-=moveBy) + 'px';
		    }

		}.bind(this);

	}

	mute() {
		var element = this.refs.mute;
		var mute 	= this.state.mute ? mute = false : mute = true;
		this.state.mute ? element.className = 'mute' : element.className = 'mute muted';
		this.setState({
			mute: mute
		});
	}

	componentDidMount() {
		this.moveInvaders.call(this);
		this.initGun.call(this);
	}

	componentWillUnmount() {
		clearInterval(this.movingInvaders);
		document.onkeydown = null;
	}

	render() {

		this.invaders = [];

		var skills = SETTINGS.skills.map((skill, index) => {
			var invader = 'invader-' + index;
			this.invaders.push(invader);
			return  (<div className="invader" key={index} ref={invader}>
						<Skills skill={skill}/>
					</div>);
		});

		var styles = {
			top: 100
		};

		return (
			<div className="space-invaders" ref="container">
				<div style={styles} className="invaders-group" ref="invaders">
					{ skills }
				</div>
				<div className="invader-gun" ref="gun"></div>
				<div className="instructions">
					<div className="arrows"><i>S</i><i>L</i><i></i><i>R</i></div>
					<div className="mute" ref="mute" onClick={this.mute.bind(this)}></div>
				</div>
			</div>
		)
	}

}

export default SpaceInvaders