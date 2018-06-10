import moment from 'moment';

class Rule {

	constructor(obj) {
		if (obj) {
			Object.keys(obj).map(key => {
				this[key] = obj[key];
			});
		}
	}

	satisfied() {
		return true;
	}

	createMessage() {
		return '';
	}

	getViolationMessage(prop, value) {
		if (!this.satisfied(value)) {
			return this.createMessage(prop);
		}
	}
}

class StringMinLengthRule extends Rule {

	constructor(minLength) {
		super({minLength});
	}

	satisfied(value) {
		return value && value.length >= this.minLength;
	}

	createMessage(prop) {
		return `The string ${prop} must be at least ${this.minLength} characters long.`;
	}
}

class StringMaxLengthRule extends Rule {
	constructor(maxLength) {
		super({maxLength});
	}

	satisfied(value) {
		return value && value.length < this.maxLength;
	}

	createMessage(prop) {
		return `The string ${prop} cannot be more than ${this.maxLength} characters long.`;
	}
}

class StringPatternRule extends Rule {
	constructor(pattern) {
		super({pattern});
	}

	satisfied(value) {
		return value.test(this.pattern);
	}

	createMessage(prop, explanation) {
		return `The string ${prop} does not conform to ${explanation || this.pattern}`;
	}
}

class NumberMinRule extends Rule {

	constructor(min) {
		super({min});
	}

	satisfied(value) {
		return value && value >= this.min;
	}

	createMessage(prop) {
		return `The number ${prop} must be bigger than ${this.min}.`;
	}
}

class NumberMaxRule extends Rule {
	constructor(max) {
		super({max});
	}

	satisfied(value) {
		return value != null && value.length < this.maxLength;
	}

	createMessage(prop) {
		return `The number ${prop} cannot be greater than ${this.max}`;
	}
}

class NumberPrecisionRule extends Rule {
	constructor(precision) {
		super({precision});
	}

	isNumeric(val) {
		return val && !isNaN(parseFloat(val)) && isFinite(val);
	}

	satisfied(value) {
		const rest = (value + '').split('.')[1];
		return this.isNumeric(value) && rest.length <= this.precision;
	}

	createMessage(prop) {
		return `The number ${prop} cannot have more than ${this.precision} decimal places.`;
	}
}

class DateRangeRule extends Rule {
	constructor(from, to) {
		super({from, to});
	}

	satisfied(value) {
		const date = moment(value);
		return value && date.isAfter(this.to) && date.isBefore(this.from);
	}

	createMessage (prop) {
		return `The date ${prop} has to be between ${this.from} and ${this.to}.`;
	}
}

export default {
	String: {
		Min: StringMinLengthRule,
		Max: StringMaxLengthRule,
		Pattern: StringPatternRule
	},
	Number: {
		Min: NumberMinRule,
		Max: NumberMaxRule,
		Precision: NumberPrecisionRule
	},
	Date: {
		Range: DateRangeRule
	}
};