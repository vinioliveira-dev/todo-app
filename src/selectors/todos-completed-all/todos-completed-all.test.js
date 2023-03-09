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
            TODOS: {
                todos: {
                    1: {
                        id: 1,
                        content: 'string1',
                        completed: false
                    },

                    2: {
                        id: 2,
                        content: 'string2',
                        completed: true
                    },

                    3: {
                        id: 3,
                        content: 'string3',
                        completed: false
                    },

                    4: {
                        id: 4,
                        content: 'string4',
                        completed: true
                    }
                }
            }
        };

        const expected = [{ id: 2, content: 'string2', completed: true }, { id: 4, content: 'string4', completed: true }];

        console.log(todosCompletedAllSelector(state));

        t.deepEqual(todosCompletedAllSelector(state), expected, 'should return the expected value');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        t.deepEqual(todosCompletedAllSelector(), [], 'should return an empty array');
        t.end();
    });
    // in this last use case, instead of undefined, it should return an empty object, 
    // or in the case of returning them in an array, then it should return an empty array
});