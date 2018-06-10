const hasErrors = validation => {
	return Object.keys(validation).map(key => {
		return !!validation[key];
	}, false);
};

export default class Validator {

	constructor (mappings) {
		this.mappings = mappings;
	}

	validate (obj) {
		const pairs = Object.keys(obj).filter(prop => {
			return this.mappings[prop];
		}).map(prop => {
			const rules = this.mappings[prop];
			const value = obj[prop];

			return { rules, value, prop };
		});

		const result = pairs.reduce((errors, { rules, prop, value }) => {
			errors[prop] = this.getViolations(rules, prop, value);
			return errors;
		}, {});

		result.hasErrors = () => hasErrors(result);

		return result;
	}

	getViolations (rules, prop, value) {
		return rules.map(rule => {
			console.log('use', rule, 'on', prop, '"' + value + '"', '(' + typeof value + ')')
			return rule.getViolationMessage(prop, value)
		})
	}

}