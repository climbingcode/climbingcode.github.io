import React from 'react';
import Skills from 'components/Skills.jsx';
import content from 'config/content.json';
import 'styles/space_invaders.scss';

class SpaceInvaders extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			arrowKeys: {
				left: 37,
				up: 38,
				right: 39,
				space: 32
			}
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
		var moveYBy = 50;
		var left = 0;
		var top = 0;
		this.direction = 'left';
		this.movingInvaders = setInterval(function() {
			if (this.hitBorder(this.direction, invaders, 10)) {
				invaders.style.top = (top+= moveYBy) + 'px';
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

	collison(bullet) {
		
		var collided = false;

		this.invaders.forEach(function(invader, index) {
			
			var invader   	   		= this.refs[invader];	
			var bulletsTop 	   		= bullet.offsetTop;
			var bulletsLeft			= bullet.offsetLeft;

			var invaderParent		= invader.parentNode;
			var invaderParentLeft   = invaderParent.offsetLeft;
			var invaderParentTop	= invaderParent.offsetTop;
			var invaderTop			= invaderParentTop + invader.offsetTop
			var invaderBottom 		= invaderTop + (invader.offsetHeight);
			var invaderBottomLeft   = invaderParentLeft + invader.offsetLeft;
			var invaderBottomRight  = invaderBottomLeft + invader.clientWidth;

			if ((bulletsLeft > invaderBottomLeft) 
				&& (bulletsLeft < invaderBottomRight)
				&& (bulletsTop < invaderBottom) 
				&& (bulletsTop > invaderTop)
				&& (invader.className.indexOf('hit') === -1)) {
				console.log(invaderBottom, bulletsTop);
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
		var moveBullet = setInterval(function() {
			bullet.style.bottom = (bottom+=10) + 'px';
			if (Math.abs(bottom) > window.innerHeight || this.collison.call(this, bullet)) {
				clearInterval(moveBullet);
				bullet.parentNode.removeChild(bullet);
			}
		}.bind(this), 50);
	}

	initGun() {

		var top  	= 0;
		var left 	= window.innerWidth/2;
		var gun 	= this.refs.gun;
		var arrows  = this.state.arrowKeys;

		gun.style.left = window.innerWidth/2 + 'px';

		document.onkeydown = function(e) {

			var e = e || window.event;

			if (e.keyCode == arrows.up || e.keyCode == arrows.space) {
    			this.shotGun.call(this, left);
    		}
		    else if (e.keyCode == arrows.right) {
		    	if (this.hitBorder('left', gun, 70)) return;
		        gun.style.left = (left+=10) + 'px';
		    }
		    else if (e.keyCode == arrows.left) {
		    	if (this.hitBorder('right', gun, 70)) return;
		    	gun.style.left = (left-=10) + 'px';
		    }

		}.bind(this);

	}

	componentDidMount() {
		// this.moveInvaders.call(this);
		this.initGun.call(this);
	}

	componentWillUnmount() {
		clearInterval(this.movingInvaders);
		document.onkeydown = null;
	}

	render() {

		this.invaders = [];

		var skills = content.skills.map((skill, index) => {
			var invader = 'invader-' + index;
			this.invaders.push(invader);
			return  (<div className="invader" key={index} ref={invader}>
						<Skills skill={skill}/>
					</div>);
		});

		return (
			<div className="space-invaders" ref="container">
				<div className="invaders-group" ref="invaders">
					{ skills }
				</div>
				<div className="invader-gun" ref="gun"></div>
			</div>
		)
	}

}

export default SpaceInvaders