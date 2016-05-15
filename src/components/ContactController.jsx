import React from 'react';
import ContactForm from 'components/ContactFormView.jsx';

import 'styles/contact.scss';

class ContactController extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contact: {
				name: '',
				email: '',
				description: ''
			},
			contactSent: false
		}
	}

	submit(event) {
		event.preventDefault();
	
		emailjs.send("default_service"
					,"contact_form",
					{	
						name: this.state.name,
						email: this.state.email, 
						content: this.state.description
					}
		).then(
		(res) => {
			var contact = this.state.contact;
			this.setState({
				contact,
				contactSent: true
			});
		},
		(err) => {
			console.log(err);
		});
	}

	inputChanged(e) {
		var feildName 	   = e.target.name;
		var fieldValue	   = e.target.value;
		var contact	       = this.state.contact;
		contact[feildName] = fieldValue;
		this.setState(contact);
	}

	render() {

		if (this.state.contactSent) {
			var $content =  <h2>Thanks for the message, {this.state.contact.name}</h2>;	
		} else {
			var $content =  <ContactForm inputChanged={this.inputChanged.bind(this)}
						 				 submit={this.submit.bind(this)}
						 				 contact={this.state.contact}
							/>;
		}

		return (
			$content
      	)
	}

}

export default ContactController;