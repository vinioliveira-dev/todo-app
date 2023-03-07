// action listened to
import TODOS_TOGGLE_COMPLETE from '../../actions/todos-toggle-complete-action/todos-toggle-complete.action.js';

// action used as reaction
import { todosDeleteTodoAction } from '../../actions/todos-delete-todo/todos-delete-todo.action.js';

const todosDeleteCompletedReaction = (action_s, store) => {
    if (!store) {
        throw new Error('ERROR - NO STORE');
    }

    const toggle_complete_action_s = action_s.filter(action => action.type === TODOS_TOGGLE_COMPLETE);

    const reaction_s = toggle_complete_action_s
        .map((action) => {
            const { id } = action.payload;
            return [ todosDeleteTodoAction(id) ];
        }).flatten();


return reaction_s;
};

export {
    todosDeleteCompletedReaction
};