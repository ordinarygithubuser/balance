import React from 'react';

import { sum } from '../../model';

export default ({ history }) => {

    const balance = sum(history.map(value => value.amount));

    const getClassName = amount => {
        if (amount > 0) return 'positive';
        if (amount < 0) return 'negative';
        return 'neutral';
    };

    return <div className={`balance ${getClassName(balance)}`}>
        {balance}
    </div>;
};