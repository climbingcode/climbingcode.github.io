import React from 'react';

import 'styles/contact.scss';

class Contact extends React.Component {

	constructor(props) {
		super(props);
	}

	submitEmail(event) {
		event.preventDefault();
		emailjs.send("default_service"
					,"contact_form",
					{	
						name: this.refs.name.value,
						email: this.refs.email.value, 
						content: this.refs.content.value
					}
		).then(
		(res) => {
			this.refs.name.value = '';
			this.refs.email.value = '';
			this.refs.content.value = '';
			window.location.href = window.location.origin;
		},
		(err) => {
			debugger;
		});
	}

	render() {
		return (
			<div className="contact" id="contactForm">
				<form onSubmit={this.submitEmail.bind(this)} ref="form">
					<input 	type="text" 
							name="name" 
							ref="name"
							placeholder="Your Name"/>
					<input 	type="text" 
							name="email" 
							ref="email" 
							placeholder="Your Email"/>
					<textarea 	type="text" 
								name="content" 
								ref="content" 
								placeholder="content"/>
					<button type="submit">Submit Email</button>
				</form>
			</div>
		)
	}

}

export default Contact;