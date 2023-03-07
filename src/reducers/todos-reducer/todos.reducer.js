// actions names
import TODOS_ADD_TODO from '../../actions/todos-add-todo-action/todos-add-todo.action.js';
import TODOS_DELETE_TODO from '../../actions/todos-delete-todo/todos-delete-todo.action.js';
import TODOS_TOGGLE_COMPLETE from '../../actions/todos-toggle-complete-action/todos-toggle-complete.action.js';

const REDUCER_NAME = 'TODOS_REDUCER';
const INITIAL_STATE = {
    all_ids: [],
    by_ids: {}
};

function todosReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case TODOS_ADD_TODO: {
            const { content } = action.payload;
            const id = generateId(state);
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

        case TODOS_DELETE_TODO: {
            const { id } = action.payload;
            
            const new_all_ids = deleteTodo(id, state.all_ids);
            const { [id]: {}, ...new_by_ids } = state.by_ids;

            return {
                ...state,
                all_ids: new_all_ids,
                by_ids: new_by_ids
            }
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

// helpers
function deleteTodo(todo_id, all_ids_array) {
    const index = findTodo(todo_id, all_ids_array);

    if (index >= 0) {
        const first_part = all_ids_array.slice(0, index);
        const second_part = all_ids_array.slice(index + 1);
        return first_part.concat(second_part);
    } else {
        return all_ids_array;
    }
}

function findTodo(todo_id, all_ids_array) {
    let index = -1, i = 0;
    while(i < all_ids_array.length && index < 0) {
        if (all_ids_array[i] === todo_id) {
            index = i;
        }
        i = i + 1;
    }

    return index;
}

function generateId (state) {
    let next_id = 0;
    while (state.all_ids.includes(next_id)) {
        next_id++;
    };
    return next_id;
}

export {
    todosReducer,
    INITIAL_STATE as initial_state,
    REDUCER_NAME as default
};