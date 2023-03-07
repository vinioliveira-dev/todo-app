// testing frameworks and dependencies
import _sinon from 'sinon';
import test from 'tape';

// action
import NOTIFICATION, { notificationAction } from './notification.action.js';

// TESTS
const TEST_NAME = 'notificationActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module: `, (t) => {
        const actual = NOTIFICATION;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'notificationAction': `, (t) => {
        
        const actual = notificationAction('hooray');
        const expected = {
            type: NOTIFICATION,
            payload: 'hooray'
        };

        t.equal(typeof notificationAction, 'function', 'should be a function.');
        t.deepEqual(actual, expected, 'should return the expected action object.')
        t.end();
    });

    t.test(`${TEST_NAME}: when no 'message' value is passed, the action:`, (t) => {
        
        const actual = notificationAction();
        const expected = {
            type: NOTIFICATION,
            payload: ''
        };

        t.deepEqual(actual, expected, 'should return the expected action object.');
        t.end();
    });
})