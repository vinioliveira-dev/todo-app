import _sinon from 'sinon';
import test from 'tape';

import { todosIncompleteAllSelector } from './todos-incomplete-all.selector.js';

const TEST_NAME = `todosIncompleteAllSelectorModule`;

test(TEST_NAME, (t) => {
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

        const expected = [{ id: 1, content: 'string1', completed: false}, {id: 3, content: 'string3', completed: false }];
        
        t.equal(typeof todosIncompleteAllSelector, 'function', 'should be a function');
        t.deepEqual(todosIncompleteAllSelector(state), expected, 'should return the expected value');
        t.end();
    });

    t.test(`${TEST_NAME}: if all "todos" have 'completed: true', the selector`, (t) => {
        const state = {
            TODOS: {
                todos: {
                    1: {
                        id: 1,
                        content: 'string1',
                        completed: true
                    },

                    2: {
                        id: 2,
                        content: 'string2',
                        completed: true
                    },

                    3: {
                        id: 3,
                        content: 'string3',
                        completed: true
                    },

                    4: {
                        id: 4,
                        content: 'string4',
                        completed: true
                    }
                }
            }
        };

        t.deepEqual(todosIncompleteAllSelector(state), [], 'should return an empty array');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        t.deepEqual(todosIncompleteAllSelector(), [], 'should return an empty array');
        t.end();
    });
});