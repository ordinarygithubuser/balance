import React from 'react';

import Menu from './menu';
import Main from './main';

export default (state) => {
    return <div className="app">
        <Menu view={state.view} />
        <Main {...state} />
    </div>;
};