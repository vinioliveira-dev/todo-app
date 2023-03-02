// actions names
import TODOS_ADD_TODO from '../../actions/todos-add-todo/todos-add-todo.action.js';
import TODOS_TOGGLE_COMPLETE from '../../actions/todos-toggle-complete/todos-toggle-complete.action.js';

const REDUCER_NAME = 'TODOS_REDUCER';
const INITIAL_STATE = {
    all_ids: [],
    by_ids: {}
};

function todosReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case TODOS_ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                all_ids: [...state.all_ids, id],
                by_ids: {
                    ...state.by_ids,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }

        case TODOS_TOGGLE_COMPLETE: {
            const { id } = action.payload;
            return (state.by_ids.hasOwnProperty(`${id}`)) ? {
                ...state,
                by_ids: {
                    ...state.by_ids,
                    [id]: {
                        ...state.by_ids[id],
                        completed: !state.by_ids[id].completed
                    }
                }
            } : state;
        }

        default:
            return state;
    }
}

export {
    todosReducer,
    INITIAL_STATE as initial_state,
    REDUCER_NAME as default
};