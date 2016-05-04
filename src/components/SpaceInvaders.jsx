import React from 'react';
import Skills from 'components/Skills.jsx';
import content from 'config/content.json';
import 'styles/space_invaders.scss';

class SpaceInvaders extends React.Component {

	constructor(props) {
		super(props);
	}

	moveInvaders() {
		
	}

	componentWillMount() {
		this.moveInvaders.call(this);
	}

	render() {

		var skills = content.skills.images.map(function(image, index) {
			return  (<div className="invader" key={index}>
						<Skills imageSrc={image}/>
					</div>
					);
		});

		return (
			<div className="space-invaders">
				<div className="invaders-wrapper" ref="invaders">
					{ skills }
				</div>
			</div>
		)
	}

}

export default SpaceInvaders