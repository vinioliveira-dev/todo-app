// dependencies
import { createStore, combineReducers } from 'redux';
import { combineReactions, createReactionEnhancer } from '../libs/redux-s/redux-s.js';

// custom dependencies for reactions
import { todosIncompleteAllSelector } from './selectors/todos-incomplete-all/todos-incomplete-all.selector.js';

// reaction
import { todosDeleteCompletedReaction } from './reactions/todos-delete-completed/todos-delete-completed.reaction.js';
import { todosCompletedAllNotificationReaction } from './reactions/todos-completed-all-notification/todos-completed-all-notification.reaction.js';

// reducers
import TODOS_REDUCER, { todosReducer } from './reducers/todos/todos.reducer.js';
import FILTERS_REDUCER, { filtersReducer } from './reducers/filters/filters.reducer.js';

function create() {
    const reactions = combineReactions(
        todosDeleteCompletedReaction,
        todosCompletedAllNotificationReaction({ todosIncompleteAllSelector })
    );
    const reactions_enhancer = createReactionEnhancer();

    const reducers = combineReducers({
        [TODOS_REDUCER]:    todosReducer,
        [FILTERS_REDUCER]:  filtersReducer
    });

    const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const plugReaction = reactions_enhancer.plugReaction(store);
    plugReaction(reactions);

    return {
        ...store,
        plugReaction
    };
};

export { create };