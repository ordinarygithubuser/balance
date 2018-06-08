import Validator from '../core/validator';
import Rules from '../core/rules';

export default new Validator({
	name: [
		Rules.String.Min(2),
		Rules.String.Max(40)
	],
	amount: [
		Rules.Number.Min(-10000),
		Rules.Number.Max(10000)
	],
	date: [
		Rules.Date.Range('01.01.2018', '31.12.2021')
	]
});