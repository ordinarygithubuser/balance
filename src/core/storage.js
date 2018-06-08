import {APP} from '../constants';

const createMetadata = () => ({
	created: new Date(),
	version: APP.VERSION
});

export default class Storage {

    vault = localStorage[APP.NAME];

    constructor (mappers) {
    	this.mappers = mappers;
    }

	load () {
		const {meta, data} = JSON.parse(this.vault);
		const mapper = this.mappers.getMapping(meta.version, APP.VERSION);

		return mapper(data);
	}

    save (state) {
	    const meta = createMetadata();
	    const data = Object.assign({ meta }, state);

	    this.vault = JSON.stringify(data);
    }

}