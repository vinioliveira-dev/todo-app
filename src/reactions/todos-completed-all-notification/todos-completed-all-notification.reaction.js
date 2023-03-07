// action listened to
import TODOS_COMPLETED_TOGGLE from '../../actions/todos-completed-toggle/todos-completed-toggle.action.js';

// action used as reaction
import { notificationAction } from '../../actions/notification/notification.action.js';

const todosCompletedAllNotification = ({ todosIncompleteAllSelector }) => (action_s, store) => {
    if (!store) {
        throw new Error('ERROR - NO STORE');
    }

    const toggle_action_s = action_s.filter(({ type }) => type === TODOS_COMPLETED_TOGGLE);

    const reaction_s = toggle_action_s
        .map(() => ({
            incomplete_todos: todosIncompleteAllSelector(store.getState())
        }))
        .map(({ incomplete_todos }) => {
            const all_done_message = 'all to-dos were done';
            if (incomplete_todos === all_done_message) {
                return notificationAction(all_done_message);
            }
            return [];
        });

    return reaction_s;
};

export {
    todosCompletedAllNotification
};