import _sinon from 'sinon';
import test from 'tape';

import { todosAllSelector } from './todos-all.selector.js';

const TEST_NAME = `todosAllSelectorModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: `, (t) => {
        t.equal(typeof todosAllSelector, 'function', 'the selector should be a function');
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

        t.deepEqual(todosAllSelector(state), state.TODOS_REDUCER.todos, 'should return the correct slice of the state');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        t.equal(todosAllSelector(), undefined, 'should return undefined');
        t.end();
    });
});