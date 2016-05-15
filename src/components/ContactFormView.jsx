import React from 'react';

class ContactFormView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (

			React.createElement('form',
				{
					className: 'contact',
					onSubmit: this.props.submit
				},
        		React.createElement('input', {
          			type: 'text',
          			placeholder: 'Name',
                    name: 'name',
                    value: this.props.contact.name,
          			onChange: (e) => {
          				this.props.inputChanged(e);
          			}
        		}),
        		React.createElement('input', {
          			type: 'email',
          			placeholder: 'Email',
                    name: 'email',
                    value: this.props.contact.email,
          			onChange: (e) => {
          				this.props.inputChanged(e);
          			}
        		}),
        		React.createElement('textarea', {
        			type: 'description',
          			placeholder: 'Description',
                    name: 'description',
                    value: this.props.contact.description,
          			onChange: (e) => {
                        this.props.inputChanged(e);
          			}
        		}),
        		React.createElement('button', {type: 'submit'}, "Submit Email")
      		)
      		
		)
	}

}

export default ContactFormView;