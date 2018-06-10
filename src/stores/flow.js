import {Flow} from '../actions';
import VIEWS from '../views';

import Store from '../core/store';

export default class FlowStore extends Store {
	constructor({ on, init, next }) {
		super({ on, init, next });

		init('view', VIEWS.HOME);
		init('modal', null);

		on(Flow.Visit, (state, view) => {
			state.view = view;
			next(state);
		});

		on(Flow.Show, (state, view) => {
			state.view = view;
			this.next(state);
		});

		on(Flow.Hide, (state) => {
			state.modal = null;
			this.next(state);
		});
	}
}