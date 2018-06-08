import React from 'react';

import AccountForm from './form';

import {Account} from '../../actions';
import {ACCOUNT} from '../../constants';

export default class CreateAccount extends AccountForm {
    constructor (props) {
        super(props, {
            name: '',
            type: ACCOUNT.TYPES[0],
            balance: 0,
            desc: '',
            color: 'black'
        });
    }

	onSubmit() {
		Account.Create(this.state);
		this.props.home();
	}

    getTitle () {
    	return 'Create an Account';
    }

    getSubmitText () {
    	return 'Create';
    }

};