import test from 'tape';
import _sinon from 'sinon';
import Kefir from 'kefir';

import { todosAddTodoAction } from '../../actions/todos-add-todo-action/todos-add-todo.action.js';
import { todosDeleteCompletedReaction } from './todos-delete-completed.reaction.js';
import { initial_state } from '../../reducers/todos-reducer/todos.reducer.js';

const TEST_NAME = `todosDeleteCompletedReactionModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: the reaction 'todosDeleteCompletedReaction'`, (t) => {
        t.equal(typeof todosDeleteCompletedReaction, 'function', 'should be a function');
        t.end();
    });
});