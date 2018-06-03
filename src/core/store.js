import clone from 'clone';

export default (...handlers) => {
    const listeners = [];
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
        console.log(state)
        observer(clone(state));
    };

    handlers.map(handler => {
        handler({ init, next, on });
    });

    return {
        observe
    };
}