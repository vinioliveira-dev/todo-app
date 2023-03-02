// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import TODOS_TOGGLE_COMPLETE, { todosToggleCompleteAction } from './todos-toggle-complete.action.js';

// TESTS
const TEST_NAME = 'todosToggleCompleteActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = TODOS_TOGGLE_COMPLETE;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'todosToggleCompleteAction': `, (t) => {
        
        const actual = todosToggleCompleteAction(1);
        const expected = {
            type: TODOS_TOGGLE_COMPLETE,
            payload: {
                id: 1
            }
        };

        console.log(actual);

        t.equal(typeof todosToggleCompleteAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no 'id' value is passed, the action:`, (t) => {
        
        const actual = todosToggleCompleteAction();
        const expected = {
            type: TODOS_TOGGLE_COMPLETE,
            payload: {
                id: undefined
            }
        };

        console.log(actual);

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})