export default () => {
    // TODO: meta info
    const listeners = [];

    const func = (...payload) => {
        listeners.map(listener => {
            listener(...payload);
        });
    };

    func.register = (callback) => {
        listeners.push(callback);
    };

    return func;
};