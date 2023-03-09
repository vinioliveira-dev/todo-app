// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import NOTIFICATION_POST, { notificationPostAction } from './notification-post.action.js';

// TESTS
const TEST_NAME = 'notificationPostActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = NOTIFICATION_POST;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'notificationPostAction': `, (t) => {
        
        const actual = notificationPostAction('hooray');
        const expected = {
            type: NOTIFICATION_POST,
            payload: 'hooray'
        };

        t.equal(typeof notificationPostAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no 'message' value is passed, the action:`, (t) => {
        
        const actual = notificationPostAction();
        const expected = {
            type: NOTIFICATION_POST,
            payload: ''
        };

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})