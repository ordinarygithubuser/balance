import State from '../core/state';

import Account from './account';
import Expense from './expense'
import Flow from './flow';

export default State(Flow, Account, Expense)