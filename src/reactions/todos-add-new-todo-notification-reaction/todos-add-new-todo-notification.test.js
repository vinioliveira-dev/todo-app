import test from 'tape';
import _sinon from 'sinon';
import Kefir from 'kefir';

import { todosAddTodoAction } from '../../actions/todos-add-todo-action/todos-add-todo.action.js';
import { todosAddNewTodoNotificationReaction } from './todos-add-new-todo-notification.reaction.js';
import { initial_state } from '../../reducers/todos-reducer/todos.reducer.js';

const TEST_NAME = `todosAddNewTodoNotificationReactionModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: the reaction 'todosAddNewTodoNotificationReaction'`, (t) => {
        t.equal(typeof todosAddNewTodoNotificationReaction, 'function', 'should be a function');
        t.end();
    });
});