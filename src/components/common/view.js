import React from 'react';

export default class View extends React.Component {
    constructor (props, view) {
        super(props);

        this.state = {
            home: view,
            view
        };
    }

    setView (view) {
        return () => this.setState({ view });
    }

    renderContext () {
        return <noscript />;
    }

    render () {
        const Component = this.state.view;

        const setHome = () => this.setState({ view: this.state.home });

        return <div className="view">
            <div className="subview">
                <Component {...this.props} home={setHome} />
            </div>
            {this.renderContext()}
        </div>;
    }
};