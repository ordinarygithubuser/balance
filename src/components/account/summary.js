import React from 'react';

import Details from './details';
import Select from '../common/select';
import {Account} from "../../actions";

export default ({ accounts, account }) => {
    if (accounts.length === 0) {
        return <div>No account was added.</div>;
    }

    const select = selection => Account.Select(selection);

    return <div>
        <Select item={account} items={accounts} onChange={select}/>
        <Details account={account} />
    </div>
}