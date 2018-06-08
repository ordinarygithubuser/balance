import React from 'react';

import Form from '../common/form';
import Row from '../common/row';
import Select from '../common/select';

import {Account} from '../../actions';
import {ACCOUNT} from '../../constants';

import Validator from '../../validators/account';

export default class CreateAccount extends Form {
    constructor (props, fields) {
        super(props, {
            name: fields.name,
            type: fields.type,
            balance: fields.balance,
            desc: fields.desc,
            color: fields.color
        });
    }

    render () {
        const { name, type, balance, desc, color, errors } = this.state;

        const submit = () => {
	        const errors = Validator.validate(this.state);

	        if (errors) {
		        this.setState({ errors });
	        } else {
		        this.onSubmit()
	        }
        };

        return <div className="form">
            <h3>{this.getTitle()}</h3>
            <Row label="Name" errors={errors.name}>
                <input value={name} onChange={this.update('name')}/>
            </Row>
            <Row label="Type">
                <Select item={type} items={ACCOUNT.TYPES} onChange={this.update('type')}/>
            </Row>
            <Row label="Balance" errors={errors.balance}>
                <input value={balance} onChange={this.update('balance')} />
            </Row>
            <Row label="Description">
                <textarea placeholder="Use of the account" value={desc}/>
            </Row>
            <Row label="Color">

            </Row>
            <Row label="">
                <button onClick={submit}>{this.getSubmitText()}</button>
            </Row>
        </div>;
    }
};