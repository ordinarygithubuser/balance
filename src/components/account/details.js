import React from 'react';

import History from '../expense/history';
import Balance from '../expense/balance';

export default class Details extends React.Component {
    render () {
        const { account } = this.props;

        if (!account) {
            return <noscript />;
        }

        return <div>
            <h2>Account {account.name}</h2>
            <div className="history">
                <History account={account}/>
                <Balance history={account.history}/>
            </div>
        </div>;
    }
}