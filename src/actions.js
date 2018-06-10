import Action from './core/action';

export const Account = {
    Create: Action(),
    Update: Action(),
    Remove: Action(),
    Select: Action()
};

export const Expense = {
    Create: Action(),
    Update: Action(),
    Remove: Action(),
    Select: Action()
};

export const Flow = {
    Visit: Action(),
    Show: Action(),
    Hide: Action(),
    Export: Action()
};