import Validator from '../core/validator';
import Rules from '../core/rules';

export default new Validator({
	name: [
		new Rules.String.Min(2),
		new Rules.String.Max(40)
	],
	balance: [
		new Rules.Number.Min(-1000000),
		new Rules.Number.Max(1000000)
	]
});