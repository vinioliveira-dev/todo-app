// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import TODOS_COMPLETED_TOGGLE, { todosCompletedToggleAction } from './todos-completed-toggle.action.js';

// TESTS
const TEST_NAME = 'todosCompletedToggleActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = TODOS_COMPLETED_TOGGLE;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'todosCompletedToggleAction': `, (t) => {
        
        const actual = todosCompletedToggleAction(1);
        const expected = {
            type: TODOS_COMPLETED_TOGGLE,
            payload: 1
        };

        t.equal(typeof todosCompletedToggleAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no 'id' value is passed, the action:`, (t) => {
        
        const actual = todosCompletedToggleAction();
        const expected = {
            type: TODOS_COMPLETED_TOGGLE,
            payload: undefined
        };

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})