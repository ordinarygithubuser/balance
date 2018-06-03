import React from 'react';

import Form from '../common/form';
import Row from '../common/row';
import Select from '../common/select';

import {Account} from '../../actions';
import {ACCOUNT} from '../../constants';

export default class CreateAccount extends Form {
    constructor (props) {
        super(props, {
            name: '',
            type: ACCOUNT.TYPES[0],
            balance: 0,
            desc: '',
            color: 'black'
        });
    }

    render () {
        const { name, type, balance, desc, color } = this.state;

        const create = () => {
            Account.Create({ name, type, balance, desc, color });
            this.props.home();
        };

        return <div className="form">
            <h3>Create an Account</h3>
            <Row label="Name">
                <input value={name} onChange={this.update('name')}/>
            </Row>
            <Row label="Type">
                <Select item={type} items={ACCOUNT.TYPES} onChange={this.update('type')}/>
            </Row>
            <Row label="Balance">
                <input value={balance} onChange={this.update('balance')} />
            </Row>
            <Row label="Description">
                <textarea placeholder="Use of the account" value={desc}/>
            </Row>
            <Row label="Color">

            </Row>
            <Row label="">
                <button onClick={create}>Create</button>
            </Row>
        </div>;
    }
};