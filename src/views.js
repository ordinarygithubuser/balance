
const Views = {
    HOME: {
        name: 'Home',
        icon: 'home',
    },
    ACCOUNT: {
        name: 'Account',
        icon: 'user',
    },
    Expense: {
        name: 'Expense',
        icon: 'euro',
    }
};

export default Views;

export const listViews = (fn) => {
    return Object.keys(Views).map((key, i) => fn(Views[key], i));
};