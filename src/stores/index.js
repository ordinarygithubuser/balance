import Store from '../core/store';

import Account from './account';
import Value from './value'
import Flow from './flow';

export default Store(
    Flow,
    Account,
    Value
)