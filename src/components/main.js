import React from 'react';
import Views from '../views';

import Home from './home/view';
import Account from './account/view';
import Expense from './expense/view';


export default ({ view, account, accounts }) => {
    const getView = () => {
        switch (view.name) {
            case Views.HOME.name:       return <Home accounts={accounts} />;
            case Views.ACCOUNT.name:    return <Account account={account} accounts={accounts} />;
            case Views.Expense.name:    return <Expense account={account} accounts={accounts} />;
            default:                    return <div>404</div>
        }
    };

    return <div className="main">
        {getView()}
    </div>;
};