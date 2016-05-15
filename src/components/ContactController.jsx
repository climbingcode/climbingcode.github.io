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
				discription: ''
			}
		}
	}

	submit(event) {
		event.preventDefault();
	
		emailjs.send("default_service"
					,"contact_form",
					{	
						name: this.state.name,
						email: this.state.email, 
						content: this.state.content
					}
		).then(
		(res) => {
			this.setState({
				name: '',
				email: '',
				description: ''
			});
		},
		(err) => {
			console.log(err);
		});
	}

	inputChanged(e) {
		var feildName 	= e.target.name;
		var fieldValue	= e.target.value;
		var contact	    = this.state.contact;
		contact[feildName] = fieldValue;
		this.setState(contact);
	}

	render() {

		return (

			<ContactForm inputChanged={this.inputChanged.bind(this)}
						 submit={this.submit.bind(this)}
						 contact={this.state.contact}
			/>

      	)
	}

}

export default ContactController;