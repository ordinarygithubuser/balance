import Validator from '../core/validator';
import Rules from '../core/rules';

export default new Validator({
	name: [
		Rules.String.Min(2),
		Rules.String.Max(40)
	],
	balance: [
		Rules.Number.Min(-1000000),
		Rules.Number.Max(1000000)
	]
});