// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import { filterSetAction } from '../../actions/filter-set/filter-set.action.js';

// reducer
import { initial_state, filtersReducer } from './filters.reducer.js';

// TESTS
const TEST_NAME = `filtersReducerModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: the reducer`, (t) => {
        t.equal(typeof filtersReducer, 'function', 'should be a function');
        t.deepEqual(initial_state, filtersReducer(), 'should return the initial state when called with no arguments')
        t.end();
    });

    t.test(`${TEST_NAME}: for the action 'filterSetAction', the reducer`, (t) => {
        const actual = filtersReducer(initial_state, filterSetAction('completed'));
        const expected = { filter: 'completed' };

        t.deepEqual(actual, expected, 'should return the new expected state');
        t.end();
    });

    t.test(`${TEST_NAME}: for the action 'filterSetAction' with a not supported filter, the reducer`, (t) => {
        const actual = filtersReducer(initial_state, filterSetAction('NOT SUPPORTED'));
        const expected = initial_state;

        t.equal(actual, expected, 'should return the previous state object');
        t.end();
    });
});