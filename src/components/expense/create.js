import React from 'react';

import Form from '../common/form';
import Row from '../common/row';
import Select from '../common/select';

import {EXPENSE} from '../../constants';

export default class Create extends Form {
    constructor (props) {
        super(props, {
            name: '',
            amount: '',
            date: '',
            city: EXPENSE.CITIES[0],
            type: EXPENSE.TYPES[0]
        });
    }

    render () {
        const { account, accounts } = this.props;
        const { name, amount, date, city, type } = this.state;

        const create = () => {
            // TODO: validate
            Create.Create(name, amount, date, city, type);
        };

        return <div className="form value">
            <h3>Add an Expense</h3>
            <Row label="Name">
                <input value={name} onChange={this.update('name')} />
            </Row>
            <Row label="Account">
                <Select item={account} items={accounts} onChange={this.update('account')}/>
            </Row>
            <Row label="Amount">
                <input value={amount} onChange={this.update('amount')} />
            </Row>
            <Row label="Date">
                <input value={date} onChange={this.update('date')} />
            </Row>
            <Row label="Location">
                <Select item={city} items={EXPENSE.CITIES} onChange={this.update('city')} />
            </Row>
            <Row label="Billing">
                <Select item={type} items={EXPENSE.TYPES} onChange={this.update('type')} />
            </Row>
            <Row>
                <button onClick={create}>Create</button>
            </Row>
        </div>;
    }
};