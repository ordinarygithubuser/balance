import React from 'react';
import { SingleDatePicker } from 'react-dates';

import Form from '../common/form';
import Row from '../common/row';
import Select from '../common/select';

import {EXPENSE} from '../../constants';
import Validator from '../../validators/expense';

export default class Create extends Form {
	constructor (props, fields) {
		super(props, {
			name: fields.name,
			amount: fields.amount,
			date: fields.date,
			dateFocused: false,
			city: fields.city,
			type: fields.type
		});
	}

	render () {
		const { account, accounts } = this.props;
		const { name, amount, date, city, type, dateFocused, errors } = this.state;

		const submit = () => {
			const errors = Validator.validate(this.state);

			if (errors) {
				this.setState({ errors });
			} else {
				this.onSubmit();
			}
		};

		return <div className="form value">
			<h3>{this.getTitle()}</h3>
			<Row label="Name" errors={errors.name}>
				<input value={name} onChange={this.update('name')} />
			</Row>
			<Row label="Account">
				<Select item={account} items={accounts} onChange={this.update('account')}/>
			</Row>
			<Row label="Amount" errors={errors.amount}>
				<input value={amount} onChange={this.update('amount')} />
			</Row>
			<Row label="Date" errors={errors.date}>
				<input value={date} onChange={this.update('date')} />
				<SingleDatePicker
					date={date}
					onDateChange={date => this.setState({ date })}
					focused={dateFocused}
					onFocusChange={({ dateFocused }) => this.setState({ dateFocused })}
					id="expense_creation"
				/>
			</Row>
			<Row label="Location">
				<Select item={city} items={EXPENSE.CITIES} onChange={this.update('city')} />
			</Row>
			<Row label="Billing">
				<Select item={type} items={EXPENSE.TYPES} onChange={this.update('type')} />
			</Row>
			<Row>
				<button onClick={submit}>{this.getSubmitText()}</button>
			</Row>
		</div>;
	}
};