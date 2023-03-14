import test from 'tape';
import _sinon from 'sinon';
import Kefir from 'kefir';

import { todosAllSelector } from '../../selectors/todos-all/todos-all.selector.js';
import { todosCompletedAllNotificationReaction } from './todos-completed-all-notification.reaction.js';
import { todosIncompleteAllSelector } from '../../selectors/todos-incomplete-all/todos-incomplete-all.selector.js';
import { notificationPostAction } from '../../actions/notification-post/notification-post.action.js';

const TEST_NAME = 'todosCompletedAllNotificationReactionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the reaction 'todosCompletedAllNotificationReaction'`, (t) => {
        t.equal(typeof todosCompletedAllNotificationReaction, 'function', 'should be a function');
        t.end();
    });

    t.test(`${TEST_NAME}: when the state changes, if "todos" slice is empty, the reaction:`, (t) => {
        try{
            const mock_store = {
                state_s: Kefir.constant(
                    {
                        FILTERS: { filter: "all" },
    
                        TODOS: {
                            last_id: 0,
                            todos: { }
                        }
                    }
                )
            };

            const expected_reactions = [];
            const actual_reaction_s = todosCompletedAllNotificationReaction({ todosIncompleteAllSelector, todosAllSelector })(null, mock_store);

            let count_reactions = 0;
            actual_reaction_s.takeWhile(() => count_reactions <= expected_reactions.length)
                .onValue((actual_reaction) => {
                    t.deepEqual(actual_reaction, expected_reactions[count_reactions], 'should return the expected value');
                    count_reactions += 1;
                })
                .onEnd(() => {
                    t.equal(count_reactions, expected_reactions.length, `should trigger ${expected_reactions.length} reactions`)
                    t.end();
                });

        } catch (error) {
            t.fail(`An error happened during test excution of ${TEST_NAME}: ${error}`);
            t.end();
        }
    });

    t.test(`${TEST_NAME}: when the state changes, if there's any "todo" with "completed: false", the reaction:`, (t) => {
        try{
            const mock_store = {
                state_s: Kefir.constant(
                    {
                        FILTERS: { filter: "all" },
    
                        TODOS: {
                            last_id: 2,
                            todos: {
                                1: {
                                    id: 1,
                                    content: 'todo #1',
                                    completed: false
                                },
                                2: {
                                    id: 2,
                                    content: "todo #2",
                                    completed: true
                                }
                            }
                        }
                    }
                )
            };

            const expected_reactions = [];
            const actual_reaction_s = todosCompletedAllNotificationReaction({ todosIncompleteAllSelector, todosAllSelector })(null, mock_store);

            let count_reactions = 0;
            actual_reaction_s.takeWhile(() => count_reactions <= expected_reactions.length)
                .onValue((actual_reaction) => {
                    t.deepEqual(actual_reaction, expected_reactions[count_reactions], 'should return the expected value');
                    count_reactions += 1;
                })
                .onEnd(() => {
                    t.equal(count_reactions, expected_reactions.length, `should trigger ${expected_reactions.length} reactions`)
                    t.end();
                });

        } catch (error) {
            t.fail(`An error happened during test excution of ${TEST_NAME}: ${error}`);
            t.end();
        }
    });

    t.test(`${TEST_NAME}: when the state changes, if all "todos" have "completed: true", the reaction:`, (t) => {
        try{
            const mock_store = {
                state_s: Kefir.constant(
                    {
                        FILTERS: { filter: "all" },
    
                        TODOS: {
                            last_id: 2,
                            todos: {
                                1: {
                                    id: 1,
                                    content: 'todo #1',
                                    completed: true
                                },
                                2: {
                                    id: 2,
                                    content: "todo #2",
                                    completed: true
                                }
                            }
                        }
                    }
                )
            };

            const expected_reactions = [notificationPostAction('Congrats! You did everything!')];
            const actual_reaction_s = todosCompletedAllNotificationReaction({ todosIncompleteAllSelector, todosAllSelector })(null, mock_store);

            let count_reactions = 0;
            actual_reaction_s.takeWhile(() => count_reactions <= expected_reactions.length)
                .onValue((actual_reaction) => {
                    t.deepEqual(actual_reaction, expected_reactions[count_reactions], 'should return the expected value');
                    count_reactions += 1;
                })
                .onEnd(() => {
                    t.equal(count_reactions, expected_reactions.length, `should trigger ${expected_reactions.length} reactions`)
                    t.end();
                });

        } catch (error) {
            t.fail(`An error happened during test excution of ${TEST_NAME}: ${error}`);
            t.end();
        }
    });
});