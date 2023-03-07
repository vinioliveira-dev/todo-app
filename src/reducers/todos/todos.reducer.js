// actions names
import TODOS_ADD from '../../actions/todos-add/todos-add.action.js';
import TODOS_DELETE from '../../actions/todos-delete/todos-delete.action.js';
import TODOS_COMPLETED_TOGGLE from '../../actions/todos-completed-toggle/todos-completed-toggle.action.js';

const REDUCER_NAME = 'TODOS_REDUCER';
const INITIAL_STATE = {
    last_id: 0,
    todos: {}
};

function todosReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case TODOS_ADD: {
            const { content } = action.payload;
            const id = state.last_id + 1;
            return {
                ...state,
                last_id: id,
                todos: {
                    ...state.todos,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }

        case TODOS_DELETE: {
            const id = action.payload;

            if (state.todos.hasOwnProperty(`${id}`)) {
                const { [id]: _removed, ...new_todos } = state.todos;

                return {
                    ...state,
                    all_ids: new_all_ids,
                    todos: new_todos
                }
            }

            return state;
        }

        case TODOS_COMPLETED_TOGGLE: {
            const { id } = action.payload;
            return (state.todos.hasOwnProperty(`${id}`)) ? {
                ...state,
                todos: {
                    ...state.todos,
                    [id]: {
                        ...state.todos[id],
                        completed: !state.todos[id].completed
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