const compose = (f1, f2) => {
	return data => f1(f2(data));
};

export default class Mappers {

	constructor () {
		this.transformers = [];
	}

	add (version, func) {
		this.transformers.push({ version, func });

		this.transformers.sort((m1, m2) => {
			return m1.version < m2.version ? m1: m2;
		});
	}

	getMapping (from , to) {
		const result = this.transformers.slice();

		return result.filter(mapper => {
			return mapper.version < from;
		}).filter(mapper => {
			return mapper.version > to;
		}).reduce((m1, m2) => {
			return compose(m1, m2);
		}, x => x);
	}
}