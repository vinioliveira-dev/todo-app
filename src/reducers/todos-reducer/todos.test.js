// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// actions
import { todosAddTodoAction } from '../../actions/todos-add-todo-action/todos-add-todo.action.js';
import { todosToggleCompleteAction } from '../../actions/todos-toggle-complete-action/todos-toggle-complete.action.js';

// reducer
import { initial_state, todosReducer } from './todos.reducer.js';

// TESTS
const TEST_NAME = `todosReducerModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: the reducer`, (t) => {
        t.equal(typeof todosReducer, 'function', 'should be a function');
        t.deepEqual(initial_state, todosReducer(), 'should return the initial state when called with no arguments')
        t.end();
    });

    // TODOS_ADD_TODO /////////////////
    t.test(`${TEST_NAME}: for the action of adding a new todo, the reducer`, (t) => {        
        const actual = todosReducer(initial_state, todosAddTodoAction('build the TODOS_REDUCER'));
        const expected = {
            all_ids: [1],
            by_ids: {
                1: {
                    content: 'build the TODOS_REDUCER',
                    completed: false
                }
            }
        };

        t.deepEqual(actual, expected, 'should return the new updated state');
        t.end();
    });

    t.test(`${TEST_NAME}: for the action of adding a new todo, if the action was called with no arguments`, (t) => {
        const actual = todosReducer(initial_state, todosAddTodoAction());
        const expected = {
            all_ids: [2],
            by_ids: {
                2: {
                    content: '',
                    completed: false
                }
            }
        }

        t.equal(actual.by_ids[2].content, '', 'should add new todo object to the state with an empty string as content')
        t.deepEqual(actual, expected, 'should return the new updated state with the new todo containing an empty string as content');
        t.end();
    });

    // TODOS_TOGGLE_COMPLETE /////////////////
    t.test(`${TEST_NAME}: for the action 'todosToggleCompleteAction', the reducer`, (t) => {
        const state = {
            all_ids: [1],
            by_ids: {
                1: {
                    content: 'build the TODOS_REDUCER',
                    completed: false
                }
            }
        };

        const actual = todosReducer(state, todosToggleCompleteAction(1));
        const expected = {
            all_ids: [1],
            by_ids: {
                1: {
                    content: 'build the TODOS_REDUCER',
                    completed: true
                }
            }
        }

        t.deepEqual(actual, expected, 'should return the new updated state');
        t.end();
    });

    t.test(`${TEST_NAME}: for the action 'todosToggleCompleteAction', if an invalid/non-existent id is passed, the reducer`, (t) => {
        const state = {
            all_ids: [1],
            by_ids: {
                1: {
                    content: 'build the TODOS_REDUCER',
                    completed: false
                }
            }
        };

        const actual = todosReducer(state, todosToggleCompleteAction(314));
        const expected = state;

        t.deepEqual(actual, expected, 'should return the previous state');
        t.end();
    });

});