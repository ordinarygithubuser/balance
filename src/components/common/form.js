import React from 'react';

const getValue = obj => {
    return obj && obj.target ? obj.target.value : obj;
};

export default class Form extends React.Component {
    constructor (props, state = {}) {
        super(props);

        this.state = state;
    }

    update (field) {
        return event => this.setState({ [field]: getValue(event) })

    }
}