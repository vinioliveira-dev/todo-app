// actions names
import TODOS_ADD_TODO from '../../actions/todos-add-todo-action/todos-add-todo.action.js';
import TODOS_DELETE_TODO from '../../actions/todos-delete-todo/todos-delete-todo.action.js';
import TODOS_TOGGLE_COMPLETE from '../../actions/todos-toggle-complete-action/todos-toggle-complete.action.js';

const REDUCER_NAME = 'TODOS_REDUCER';
const INITIAL_STATE = {
    last_id: 0,
    todos: {}
};

function todosReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case TODOS_ADD_TODO: {
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

        case TODOS_DELETE_TODO: {
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

        case TODOS_TOGGLE_COMPLETE: {
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