import React from 'react';

import AccountForm from './form';

import {Account} from '../../actions';

export default class CreateAccount extends AccountForm {
	constructor (props) {
		super(props, props.account);
	}

	onSubmit() {
		Account.Update(this.state);
		this.props.home();
	}

	getTitle () {
		return 'Edit an Account';
	}

	getSubmitText () {
		return 'Update';
	}

};