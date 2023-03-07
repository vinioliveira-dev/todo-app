// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import TODOS_DELETE, { todosDeleteAction } from './todos-delete.action.js';

// TESTS
const TEST_NAME = 'todosDeleteActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = TODOS_DELETE;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'todosDeleteAction': `, (t) => {
        
        const actual = todosDeleteAction(1);
        const expected = {
            type: TODOS_DELETE,
            payload: 1
        };

        t.equal(typeof todosDeleteAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no 'id' value is passed, the action:`, (t) => {
        
        const actual = todosDeleteAction();
        const expected = {
            type: TODOS_DELETE,
            payload: undefined
        };

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})