import React from 'react';
import {Value} from "../../actions";

export default ({ account }) => {

    const elements = account.history.map(element => {
        const update = () => Value.Update(account, element.id);
        const remove = () => Value.Remove(account, element.id);

        return <div className="value">
            <div className="name">{element.name}</div>
            <div className="amount">{element.amount}</div>
            <div className="city">{element.city}</div>
            <div className="date">{element.date}</div>
            <i className="fa fa-remove" onClick={update}/>
            <i className="fa fa-remove" onClick={remove}/>
        </div>;
    });

    return <div className="history">
        {elements}
    </div>;
}