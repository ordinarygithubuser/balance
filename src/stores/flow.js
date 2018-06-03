import { Flow } from '../actions';
import VIEWS from '../views';

export default ({ init, next, on }) => {

    init('view', VIEWS.HOME);
    init('modal', null);

    on(Flow.Visit, (state, view) => {
        state.view = view;
        next(state);
    });

    on(Flow.Show, (state, modal) => {
        state.modal = modal;
        next(state);
    });

    on(Flow.Hide, (state) => {
        state.modal = null;
        next(state);
    });

}