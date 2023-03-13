// dependencies
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
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

function create(configuration = {}) {
    const { redux_devtool_extension_compose } = configuration;

    const reactions = combineReactions(
        todosCompletedAllNotificationReaction({
            todosIncompleteAllSelector,
            todosAllSelector
        })
    );
    const reactions_enhancer = createReactionEnhancer();//reactions needs to be plugged later

    const reducers = combineReducers({
        [FILTERS]:              filtersReducer,
        [TODOS]:                todosReducer
    });

    const composeEnhancers = redux_devtool_extension_compose || compose;
    const enhancer = composeEnhancers(
        reactions_enhancer.enhancer//order matters, reactions_enhancer should before any middleware, in a composer means the last one
    );

    const store = createStore(reducers, enhancer);
    const plugReaction = reactions_enhancer.plugReaction(store);
    plugReaction(reactions);

    return {
        ...store,
        plugReaction// plug reactions dynamically from UI components
    };
}

export {
    create
};