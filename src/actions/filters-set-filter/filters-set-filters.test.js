// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import FILTERS_SET_FILTER, { filtersSetFilterAction } from './filters-set-filter.action.js';

// TESTS
const TEST_NAME = 'filtersSetFilterActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = FILTERS_SET_FILTER;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'filtersSetFilterAction': `, (t) => {
        
        const actual = filtersSetFilterAction('completed');
        const expected = {
            type: FILTERS_SET_FILTER,
            payload: { filter: 'completed'}
        };

        t.equal(typeof filtersSetFilterAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no valid filter is passed, the action:`, (t) => {
        
        const actual = filtersSetFilterAction();
        const expected = {
            type: FILTERS_SET_FILTER,
            payload: {
                filter: undefined
            }
        };

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})