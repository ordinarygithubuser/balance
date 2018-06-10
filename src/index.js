import React from 'react';
import ReactDOM from 'react-dom';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/app.scss';

import Store from './stores';
import App from './components/app';

window.onload = () => {
	const node = document.getElementById('root');

	Store.observe(state => {
        ReactDOM.render(<App {...state}/>, node);
    });
};