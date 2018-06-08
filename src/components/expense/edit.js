import React from 'react';

import ExpenseForm from './form';
import {Expense} from '../../actions';

export default class Create extends ExpenseForm {
	constructor (props) {
		super(props, props.expense);
	}

	onSubmit () {
		Expense.Update(this.state);
		this.props.home();
	}

	getTitle () {
		return 'Add an Expense';
	}

	getSubmitText () {
		return 'Update';
	}
};