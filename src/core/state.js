import clone from 'clone';

export default (...Stores) => {
    const listeners = [];
    const stores = [];
    const state = {};
    
    const observe = observer => {
        listeners.push(observer);
        notify(observer);
    };

    const init = (key, pState) => {
        state[key] = pState;
    };

    const next = (delta) => {
        Object.keys(delta).map(key => {
            state[key] = delta[key];
        });

        listeners.map(notify);
    };

    const on = (action, callback) => {
        action.register((...payload) => {
            callback(clone(state), ...payload);
        });
    };

    const notify = observer => {
        observer(clone(state));
    };

    Stores.map(Store => {
        stores.push(new Store({init, next, on}));
    });

    return {
        observe
    };
}