// action listened to
import TODOS_COMPLETED_TOGGLE from '../../actions/todos-completed-toggle/todos-completed-toggle.action.js';

// action used as reaction
import { todosDeleteAction } from '../../actions/todos-delete/todos-delete.action.js';

const todosDeleteCompletedReaction = (action_s, store) => {
    if (!store) {
        throw new Error('ERROR - NO STORE');
    }

    const toggle_action_s = action_s.filter(({ type }) => type === TODOS_COMPLETED_TOGGLE);

    const reaction_s = toggle_action_s
        .map(action => todosDeleteAction(action.payload));

    return reaction_s;
};

export {
    todosDeleteCompletedReaction
};