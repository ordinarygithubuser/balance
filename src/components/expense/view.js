import React from 'react';

import CreateExpense from './create';
import View from '../common/view';

export default class ExpenseView extends View {
    constructor (props) {
        super(props, CreateExpense);
    }
}