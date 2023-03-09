// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// actions
import { todosAddAction } from '../../actions/todos-add/todos-add.action.js';
import { todosCompletedToggleAction } from '../../actions/todos-completed-toggle/todos-completed-toggle.action.js';

// reducer
import { initial_state, todosReducer } from './todos.reducer.js';

// TESTS
const TEST_NAME = `todosReducerModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: the reducer`, (t) => {
        t.equal(typeof todosReducer, 'function', 'should be a function');
        t.deepEqual(initial_state, todosReducer(), 'should return the previous state when called with no arguments');
        t.end();
    });

    t.test(`${TEST_NAME}: for not supported action, the reducer`, (t) => {        
        const actual = todosReducer(initial_state, {type: 'NOT_SUPPORTED', payload: null});
        const expected = initial_state;

        t.deepEqual(actual, expected, 'should return the previous state');
        t.end();
    });    

    // TODOS_ADD /////////////////
    t.test(`${TEST_NAME}: for the action of adding a new todo, the reducer`, (t) => {        
        const actual = todosReducer(initial_state, todosAddAction('build the TODOS'));
        const expected = {
            last_id: 1,
            todos: {
                1: {
                    id: 1,
                    content: 'build the TODOS',
                    completed: false
                }
            }
        };

        t.deepEqual(actual, expected, 'should return the new updated state');
        t.end();
    });

    t.test(`${TEST_NAME}: for the action of adding a new todo, if the action was called with no arguments`, (t) => {
        const actual = todosReducer({ last_id: 3 }, todosAddAction());
        const expected = {
            last_id: 4,
            todos: {
                4: {
                    id: 4,
                    content: '',
                    completed: false
                }
            }
        }

        t.equal(actual.todos[4].content, '', 'should add new todo object to the state with an empty string as content')
        t.deepEqual(actual, expected, 'should return the new updated state with the new todo containing an empty string as content');
        t.end();
    });

    // TODOS_COMPLETED_TOGGLE /////////////////
    t.test(`${TEST_NAME}: for the action 'todosCompletedToggleAction', the reducer`, (t) => {
        const state = {
            last_id: 1,
            todos: {
                1: {
                    id: 1,
                    content: 'build the TODOS',
                    completed: false
                }
            }
        };

        const actual = todosReducer(state, todosCompletedToggleAction(1));
        const expected = {
            last_id: 1,
            todos: {
                1: {
                    id: 1,
                    content: 'build the TODOS',
                    completed: true
                }
            }
        }

        t.deepEqual(actual, expected, 'should return the new updated state');
        t.end();
    });

    t.test(`${TEST_NAME}: for the action 'todosCompletedToggleAction', if an invalid/non-existent id is passed, the reducer`, (t) => {
        const state = {
            last_id: 1,
            todos: {
                1: {
                    id: 1,
                    content: 'build the TODOS',
                    completed: false
                }
            }
        };

        const actual = todosReducer(state, todosCompletedToggleAction(314));
        const expected = state;

        t.equal(actual, expected, 'should return the previous state object');
        t.end();
    });
});