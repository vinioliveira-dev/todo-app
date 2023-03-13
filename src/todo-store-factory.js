// dependencies
import { createStore, combineReducers } from 'redux';
import { combineReactions, createReactionEnhancer } from '../libs/redux-s/redux-s.js';

// custom dependencies for reactions
import { todosIncompleteAllSelector } from './selectors/todos-incomplete-all/todos-incomplete-all.selector.js';
import { todosAllSelector } from './selectors/todos-all/todos-all.selector.js';

// reactions
/* import { todosDeleteCompletedReaction } from './reactions/todos-delete-completed/todos-delete-completed.reaction.js'; */ //DISABLED TO AVOID INTERFERENCE ON OTHER REACTIONS
import { todosCompletedAllNotificationReaction } from './reactions/todos-completed-all-notification/todos-completed-all-notification.reaction.js';

// reducers
import TODOS, { todosReducer } from './reducers/todos/todos.reducer.js';
import FILTERS, { filtersReducer } from './reducers/filters/filters.reducer.js';

function create() {
    const reactions = combineReactions(
        //todosDeleteCompletedReaction,
        todosCompletedAllNotificationReaction({ todosIncompleteAllSelector, todosAllSelector })
    );
    const reactions_enhancer = createReactionEnhancer();

    const reducers = combineReducers({
        [TODOS]:    todosReducer,
        [FILTERS]:  filtersReducer
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