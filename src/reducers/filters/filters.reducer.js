import FILTER_SET from '../../actions/filter-set/filter-set.action.js';

const REDUCER_NAME = `FILTERS`;
const INITIAL_STATE = { filter: "all" };

const AVAILABLE_FILTERS = {
    all: "all",
    completed: "completed",
    incomplete: "incomplete"
};

function filtersReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case FILTER_SET: {
            return AVAILABLE_FILTERS[action.payload] ? { ...state, filter: action.payload } : state;
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