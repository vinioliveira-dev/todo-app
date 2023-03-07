// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import TODOS_ADD, { todosAddAction } from './todos-add.action.js';

// TESTS
const TEST_NAME = 'todosAddActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = TODOS_ADD;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'todosAddAction': `, (t) => {
        
        const actual = todosAddAction('build TODOS_ADD action');
        const expected = {
            type: TODOS_ADD,
            payload: { content: 'build TODOS_ADD action' }
        };

        t.equal(typeof todosAddAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no 'content' value is passed, the action:`, (t) => {
        
        const actual = todosAddAction();
        const expected = {
            type: TODOS_ADD,
            payload: { content: '' }
        }

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})