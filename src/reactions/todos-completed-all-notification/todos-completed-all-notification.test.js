import test from 'tape';
import _sinon from 'sinon';
import Kefir from 'kefir';

import { todosCompletedToggleAction } from '../../actions/todos-completed-toggle/todos-completed-toggle.action.js';
import { todosIncompleteAllSelector } from '../../selectors/todos-incomplete-all/todos-incomplete-all.selector.js';
import { todosCompletedAllNotificationReaction } from './todos-completed-all-notification.reaction.js';
import { notificationAction } from '../../actions/notification/notification.action.js';

const TEST_NAME = 'todosCompletedAllNotificationReactionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the reaction 'todosCompletedAllNotificationReaction'`, (t) => {
        t.equal(typeof todosCompletedAllNotificationReaction, 'function', 'should be a function');
        t.end();
    });

    t.test(`${TEST_NAME}: when 'todosCompletedToggleAction' is called, if there is any "todo" object with the property 'completed' set to 'false', the reaction:`, (t) => {
        try{
            const mock_store = {
                getState: () => {
                    return {
                        TODOS_REDUCER: {
                            todos: {
                                1: {
                                    content: 'string1',
                                    completed: false
                                },
            
                                2: {
                                    content: 'string2',
                                    completed: true
                                },
            
                                3: {
                                    content: 'string3',
                                    completed: true
                                },
            
                                4: {
                                    content: 'string4',
                                    completed: true
                                }
                            }
                        }
                    };
                }
            };

            const action = todosCompletedToggleAction(1);

            const expected_reactions = undefined;

            const action_s = Kefir.constant(action);

            const actual_reaction_s = todosCompletedAllNotificationReaction({ todosIncompleteAllSelector })(action_s, mock_store);

            actual_reaction_s
                .onValue((actual_reaction) => {
                    t.deepEqual(actual_reaction, expected_reactions, 'should return the expected value');
                })
                .onEnd(() => {
                    t.end();
                });
        } catch (error) {
            t.fail(`An error happened during test excution of ${TEST_NAME}: ${error}`);
            t.end();
        }
    });

    t.test(`${TEST_NAME}: when 'todosCompletedToggleAction' is called, if all "todo" objects have 'completed' set to 'true', the reaction:`, (t) => {
        try{
            const mock_store = {
                getState: () => {
                    return {
                        TODOS_REDUCER: {
                            todos: {
                                1: {
                                    content: 'string1',
                                    completed: true
                                },
            
                                2: {
                                    content: 'string2',
                                    completed: true
                                },
            
                                3: {
                                    content: 'string3',
                                    completed: true
                                },
            
                                4: {
                                    content: 'string4',
                                    completed: true
                                }
                            }
                        }
                    };
                }
            };

            const action = todosCompletedToggleAction(1);

            const expected_reactions = notificationAction('all to-dos were done');

            const action_s = Kefir.constant(action);

            const actual_reaction_s = todosCompletedAllNotificationReaction({ todosIncompleteAllSelector })(action_s, mock_store);

            actual_reaction_s
                .onValue((actual_reaction) => {
                    t.deepEqual(actual_reaction, expected_reactions, 'should return the expected value');
                })
                .onEnd(() => {
                    t.end();
                });
        } catch (error) {
            t.fail(`An error happened during test excution of ${TEST_NAME}: ${error}`);
            t.end();
        }
    });
});