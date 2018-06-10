import Validator from '../core/validator';
import Rules from '../core/rules';

export default new Validator({
	name: [
		new Rules.String.Min(2),
		new Rules.String.Max(40)
	],
	amount: [
		new Rules.Number.Min(-10000),
		new Rules.Number.Max(10000)
	],
	date: [
		new Rules.Date.Range('01.01.2018', '31.12.2021')
	]
});