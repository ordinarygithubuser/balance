import {UID} from '../core/util';

const id = UID();

export default class Store {
	constructor({init, next, on}) {
		this.init = init;
		this.next = next;
		this.on = on;
	}
}

export class CollectionStore extends Store {
	constructor(props, attributes) {
		super(props);

		this.keys = {
			value: attributes[0],
			collection: attributes[1]
		};

		this.init(this.keys.value, null);
		this.init(this.keys.collection, []);
	}

	getValue(state) {
		return state[this.keys.value];
	}

	setValue(state, value) {
		state[this.keys.value] = value;
	}

	getCollection(state) {
		return state[this.keys.collection];
	}

	setCollection(state, collection) {
		state[this.keys.collection] = collection;
	}
}

export class CURSStore extends CollectionStore {
	constructor(props, attributes, actions) {
		super(props, attributes);

		this.on(actions.Create, this.create);
		this.on(actions.Update, this.update);
		this.on(actions.Remove, this.remove);
		this.on(actions.Select, this.select);
	}

	createInstance() {
		return {};
	}

	updateInstance() {
		return current => current;
	}

	removeInstance() {
		return current => false;
	}

	create(state, active = true) {
		const id = id.next();
		const value = Object.assign({id}, this.createInstance());

		if (active) this.setValue(state, value);
		this.setCollection(this.getCollection(state).concat([value]));
		this.next(state);
	}

	update(state, props) {
		const collection = this.getCollection().map(this.updateInstance);

		this.setCollection(state, collection);
		this.next();
	}

	remove(state, props) {
		const collection = this.getCollection(state).filter(this.removeInstance);

		if (this.getValue(state).id === props.id) {
			this.setValue(state, null);
		}
		this.setCollection(state, collection);
		this.next(state);
	}

	select (state, value) {
		this.setValue(state, value);
		this.next(state);
	}
}