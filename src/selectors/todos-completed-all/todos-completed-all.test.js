import _sinon from 'sinon';
import test from 'tape';

import { todosCompletedAllSelector } from './todos-completed-all.selector.js';

const TEST_NAME = `todosCompletedAllSelectorModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: `, (t) => {
        t.equal(typeof todosCompletedAllSelector, 'function', 'the selector should be a function');
        t.end();
    });

    t.test(`${TEST_NAME}: the selector`, (t) => {
        const state = {
            TODOS_REDUCER: {
                todos: {
                    1: {
                        content: 'string1',
                        completed: false
                    },

                    2: {
                        content: 'string2',
                        completed: true
                    },

                    3: {
                        content: 'string3',
                        completed: false
                    },

                    4: {
                        content: 'string4',
                        completed: true
                    }
                }
            }
        };

        const expected = {
            2: {
                content: 'string2',
                completed: true
            },

            4: {
                content: 'string4',
                completed: true
            }
        }

        t.deepEqual(todosCompletedAllSelector(state), expected, 'should return the correct slice of the state');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        t.equal(todosCompletedAllSelector(), undefined, 'should return undefined');
        t.end();
    });
});