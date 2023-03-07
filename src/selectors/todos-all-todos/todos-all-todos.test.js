import _sinon from 'sinon';
import test from 'tape';

import { todosAllTodosSelector } from './todos-all-todos.selector.js';

const TEST_NAME = `todosAllTodosSelectorModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: `, (t) => {
        t.equal(typeof todosAllTodosSelector, 'function', 'the selector should be a function');
        t.end();
    });

    t.test(`${TEST_NAME}: the selector`, (t) => {
        const state = {
            TODOS_REDUCER: {
                last_id: 0,
                todos: {}
            },
            FILTERS_REDUCER: {
                filter: 'all'
            }
        };

        t.deepEqual(todosAllTodosSelector(state), state.TODOS_REDUCER.todos, 'should return the correct slice of the state');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        const state = {
            TODOS_REDUCER: {
                last_id: 0,
                todos: {}
            },
            FILTERS_REDUCER: {
                filter: 'all'
            }
        };

        t.deepEqual(todosAllTodosSelector(), undefined, 'should return undefined');
        t.end();
    });
});