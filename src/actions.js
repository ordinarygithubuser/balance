import Action from './core/action';

export const Account = {
    Create: Action(),
    Update: Action(),
    Select: Action()
};

export const Value = {
    Create: Action(),
    Update: Action(),
    Remove: Action()
};

export const Flow = {
    Visit: Action(),
    Show: Action(),
    Hide: Action()
};