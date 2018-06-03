import React from 'react';
import {Flow} from '../actions';

import {listViews} from '../views';

export default ({ view }) => {
    const visit = route => () => Flow.Visit(route);

    const elements = listViews((current, i) => {
        const selected = view && view.name === current.name ? 'selected' : '';

        return <div key={i} className={`entry ${selected}`} onClick={visit(current)}>
            {current.name}
        </div>
    });

    return <div className="menu">
        {elements}
    </div>;
};