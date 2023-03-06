// dependencies
import { createStore, combineReducers } from 'redux';
import { combineReactions, createReactionEnhancer } from '../libs/redux-s/redux-s.js';

// reaction
import { todosAddNewTodoNotificationReaction } from './reactions/todos-add-new-todo-notification-reaction/todos-add-new-todo-notification.reaction.js';

// reducers
import TODOS_REDUCER, { todosReducer } from './reducers/todos-reducer/todos.reducer.js';
import FILTERS_REDUCER, { filtersReducer } from './reducers/filters-reducer/filters.reducer.js';

function create() {
    const reactions = combineReactions(todosAddNewTodoNotificationReaction);
    const reactions_enhancer = createReactionEnhancer();

    const reducers = combineReducers({
        [TODOS_REDUCER]:    todosReducer,
        [FILTERS_REDUCER]:  filtersReducer
    });

    const store = createStore(reducers);
    const plugReaction = reactions_enhancer.plugReaction(store);
    plugReaction(reactions);

    return {
        ...store,
        plugReaction
    };
};

export { create };