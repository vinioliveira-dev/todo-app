import FILTERS_SET_FILTER from '../../actions/filters-set-filter/filters-set-filter.action.js';
import { initial_state } from '../todos-reducer/todos.reducer.js';

const REDUCER_NAME = `FILTERS_REDUCER`;
const INITIAL_STATE = { active_filter: "all" };

const AVAILABLE_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
};

function filtersReducer(state = initial_state, action = {}) {
    switch (action.type) {
        case FILTERS_SET_FILTER: {
            return AVAILABLE_FILTERS.hasOwnProperty(action.payload.filter) ? 
            action.payload.filter : 
            state;
        }

        default: {
            return state;
        }
    }
}

export {
    filtersReducer,
    INITIAL_STATE as initial_state,
    REDUCER_NAME as default
};