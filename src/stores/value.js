import { Value } from '../actions';
import { UID} from '../core/util';

const vid = UID();

export default ({ next, on }) => {

    const setAccount = (state, account) => {

    };

    on(Value.Create, (state, accountId, value) => {
        const account = state.accounts[accountId];
        const id = vid.next;

        account.history[id] = Object.assign({ id }, value);
        setAccount(state, account); // TODO: wirklich?
        next(state);
    });

    on(Value.Update, (state, accountId, value) => {
        const account = getAccount(state, accountId);

        account.history[value.id] = value;
        setAccount(state, account); // TODO: wirklich?
        next(state);
    });

    on(Value.Remove, (state, accountId, valueId) => {
        const account = state.accounts[accountId];

        delete account[valueId];
        // setAccount?
        next(state);
    });

}