import {Expense} from '../actions';
import {CURSStore} from '../core/store';

export default class ExpenseStore extends CURSStore {
	constructor(props) {
		super(props, ['expense', 'expenses'], Expense);
	}

	createInstance(state, props) {
		return {
			name: props.name,
			date: props.date,
			amount: props.amount,
			account: props.account
		};
	}

	removeInstance(state, props) {
		return expense => expense.id !== props.id;
	}

	updateInstance(state, props) {
		return expense => {
			return expense.id === props.id ? Object.assign(expense, props) : expense;
		};
	}
}