// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import FILTER_SET, { filterSetAction } from './filter-set.action.js';

// TESTS
const TEST_NAME = 'filterSetActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = FILTER_SET;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'filterSetAction': `, (t) => {
        
        const actual = filterSetAction('completed');
        const expected = {
            type: FILTER_SET,
            payload: { filter: 'completed'}
        };

        t.equal(typeof filterSetAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no valid filter is passed, the action:`, (t) => {
        
        const actual = filterSetAction();
        const expected = {
            type: FILTER_SET,
            payload: {
                filter: undefined
            }
        };

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})