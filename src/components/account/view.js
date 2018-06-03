import React from 'react';

import View from '../common/view';
import Summary from './summary'
import Create from './create';

export default class AccountView extends View {
    constructor (props) {
        super(props, Summary);
    }

    renderContext () {
        return <div className="context">
            <i title="All" className="icon fa fa-list" onClick={this.setView(Summary) }/>
            <i title="Add" className="icon fa fa-user-plus" onClick={this.setView(Create)}/>
            <i title="Edit" className="icon fa fa-edit" />
            <i className="span" />
            <i title="Remove" className="icon fa fa-trash"/>
        </div>;
    }
}