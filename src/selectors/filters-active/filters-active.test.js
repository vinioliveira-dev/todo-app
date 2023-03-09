import _sinon from 'sinon';
import test from 'tape';

import { filtersActiveSelector } from './filters-active.selector.js';

const TEST_NAME = `filtersActiveSelectorModule`;

test(TEST_NAME, (t) => {
    t.test(`${TEST_NAME}: `, (t) => {
        t.equal(typeof filtersActiveSelector, 'function', 'the selector should be a function');
        t.end();
    });

    t.test(`${TEST_NAME}: the selector`, (t) => {
        const state = {
            TODOS: {
                last_id: 0,
                todos: {}
            },
            FILTERS: {
                filter: 'all'
            }
        };

        t.deepEqual(filtersActiveSelector(state), state.FILTERS.filter, 'should return the correct slice of the state');
        t.end();
    });

    t.test(`${TEST_NAME}: if no state object is passed, the selector`, (t) => {
        t.equal(filtersActiveSelector(), undefined, 'should return undefined');
        t.end();
    });
});