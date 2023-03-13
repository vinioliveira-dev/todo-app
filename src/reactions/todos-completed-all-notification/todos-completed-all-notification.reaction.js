// action used as reaction
import { notificationPostAction } from '../../actions/notification-post/notification-post.action.js';

const todosCompletedAllNotificationReaction = ({ todosIncompleteAllSelector, todosAllSelector }) => (action_s, store) => {

    if (!store) {
        throw new Error('ERROR - NO STORE');
    }

    const state_change_s = store.state_s;

    const reaction_s = state_change_s
        .map((state) => {
            const all_todos = todosAllSelector(state);
            const incomplete_todos = todosIncompleteAllSelector(state);
            return (all_todos.length > 0 && incomplete_todos.length === 0) ? [notificationPostAction('Congrats! You did everything!')] : []
        })
        .flatten();

    return reaction_s;
};

export {
    todosCompletedAllNotificationReaction
};