import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.scss';

import Store from './stores';
import App from './components/app';

window.onload = () => {
	const node = document.getElementById('root');

	Store.observe(state => {
        ReactDOM.render(<App {...state}/>, node);
    });
};