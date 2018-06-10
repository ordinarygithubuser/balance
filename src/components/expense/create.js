import moment from 'moment';
import React from 'react';

import ExpenseForm from './form';
import {EXPENSE} from '../../constants';

export default class Create extends ExpenseForm {
    constructor (props) {
        super(props, {
            name: '',
            amount: '',
            date: moment(),
	        dateFocused: false,
            city: EXPENSE.CITIES[0],
            type: EXPENSE.TYPES[0]
        });
    }

	onSubmit () {
		Create.Create(this.state);
		this.props.home();
	}

	getTitle () {
		return 'Create an Expense';
	}

    getSubmitText () {
    	return 'Create';
    }

};