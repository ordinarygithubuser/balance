import React from 'react';

import View from '../common/view';

const Summary = () => {
    return <div>Summary</div>;
};

const History = () => {
    return <div>History</div>;
};

export default class AccountView extends View {
    constructor (props) {
        super(props, Summary);
    }

    renderContext () {
        return <div className="context">
            <i title="Summary" className="icon fa fa-pie-chart" onClick={this.setView(Summary)} />
            <i title="History" className="icon fa fa-list" onClick={this.setView(History)}/>
            <i className="span" />
            <i title="Export" className="icon fa fa-download"/>
        </div>
    }
}