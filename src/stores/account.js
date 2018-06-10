import {CURSStore} from '../core/store';
import {Account} from '../actions';

export default class AccountStore extends CURSStore {

	constructor(props) {
		super(props, ['account', 'accounts'], Account);
	}

	createInstance(state, props) {
		return {
			history: [],
			name: props.name,
			type: props.type,
			desc: props.desc,
			balance: props.balance,
			color: props.color
		};
	}

	removeInstance(state, props) {
		return acc => acc.id !== props.id;
	}

	updateInstance(state, props) {
		return acc => acc.id === props.id ? Object.assign(acc, props) : acc;
	}
}