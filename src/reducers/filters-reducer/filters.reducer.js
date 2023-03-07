import FILTER_SET from '../../actions/filter-set/filter-set.action.js';

const REDUCER_NAME = `FILTERS_REDUCER`;
const INITIAL_STATE = { filter: "all" };

const AVAILABLE_FILTERS = {
    all: "all",
    completed: "completed",
    incomplete: "incomplete"
};

function filtersReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case FILTER_SET: {
            return AVAILABLE_FILTERS.hasOwnProperty(action.payload.filter) ? 
            { filter: action.payload.filter } : 
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