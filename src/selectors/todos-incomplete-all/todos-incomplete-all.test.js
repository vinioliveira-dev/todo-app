import _sinon from 'sinon';
import test from 'tape';

import { todosIncompleteAllSelector } from './todos-incomplete-all.selector.js';

const TEST_NAME = `todosIncompleteAllSelectorModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: `, (t) => {
        t.equal(typeof todosIncompleteAllSelector, 'function', 'the selector should be a function');
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
            1: {
                content: 'string1',
                completed: false
            },

            3: {
                content: 'string3',
                completed: false
            }
        }

        t.deepEqual(todosIncompleteAllSelector(state), expected, 'should return the correct values');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        t.equal(todosIncompleteAllSelector(), undefined, 'should return undefined');
        t.end();
    });
});