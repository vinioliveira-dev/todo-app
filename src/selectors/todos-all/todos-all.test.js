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
            TODOS: {
                last_id: 0,
                todos: {
                    1: {
                        id: 1,
                        content: 'abc',
                        completed: false
                    }
                }
            },
            FILTERS: {
                filter: 'all'
            }
        };

        t.deepEqual(todosAllSelector(state), Object.values(state.TODOS.todos), 'should return an array with all todos objects');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        t.deepEqual(todosAllSelector(), [], 'should return an empty array');
        t.end();
    });
});