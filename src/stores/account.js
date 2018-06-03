import {Account, Flow} from '../actions';

export default ({ init, next, on }) => {

    init('account', null);
    init('accounts', []);

    on(Account.Create, (state, props) => {
        state.account = Object.assign({ history: [] }, props);
        state.accounts.push(state.account);
        next(state);
    });

    on(Account.Update, (state, details) => {

        next(state);
    });

    on(Account.Select, (state, account) => {
        state.account = account;
        next(state);
    })

}