// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import TODOS_ADD_TODO, { addTodoAction } from './todos-add-todo.action.js';

// TESTS
const TEST_NAME = 'addTodoActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = TODOS_ADD_TODO;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'addTodoAction': `, (t) => {
        
        const actual = addTodoAction('build TODOS_ADD_TODO action');
        const expected = {
            type: TODOS_ADD_TODO,
            payload: {
                id: 1,
                content: 'build TODOS_ADD_TODO action'
            }
        };

        t.equal(typeof addTodoAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no 'content' value is passed, the action:`, (t) => {
        
        const actual = addTodoAction();
        const expected = {
            type: TODOS_ADD_TODO,
            payload: {
                id: 2,
                content: ''
            }
        }

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})