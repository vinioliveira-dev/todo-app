import test from 'tape';
import _sinon from 'sinon';
import Kefir from 'kefir';

import { todosAllSelector } from '../../selectors/todos-all/todos-all.selector.js';
import { todosCompletedAllNotificationReaction } from './todos-completed-all-notification.reaction.js';
import { todosCompletedToggleAction } from '../../actions/todos-completed-toggle/todos-completed-toggle.action.js';
import { todosIncompleteAllSelector } from '../../selectors/todos-incomplete-all/todos-incomplete-all.selector.js';
import { initial_state } from '../../reducers/todos/todos.reducer.js';
import { notificationPostAction } from '../../actions/notification-post/notification-post.action.js';

const TEST_NAME = 'todosCompletedAllNotificationReactionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the reaction 'todosCompletedAllNotificationReaction'`, (t) => {
        t.equal(typeof todosCompletedAllNotificationReaction, 'function', 'should be a function');
        t.end();
    });



    t.test(`${TEST_NAME}: when the state changes, the reaction:`, (t) => {
        try{
            const state_s = Kefir.sequentially(0, [
                // state 1
                {
                    FILTERS: {
                        filter: "all"
                    },

                    TODOS: {
                        last_id: 4,

                        todos: {

                            1: {
                                id: 1,
                                content: 'string 1',
                                completed: false
                            },

                            2: {
                                id: 2,
                                content: 'string 2',
                                completed: true
                            },

                            3: {
                                id: 3,
                                content: 'string 3',
                                completed: false
                            },

                            4: {
                                id: 4,
                                content: 'string 4',
                                completed: true
                            }
                        }
                    }
                }, // end of <value 1>

                // state 2 - toggle todo #1
                {
                    FILTERS: {
                        filter: "all"
                    },

                    TODOS: {
                        last_id: 4,

                        todos: {

                            1: {
                                id: 1,
                                content: 'string 1',
                                completed: true
                            },

                            2: {
                                id: 2,
                                content: 'string 2',
                                completed: true
                            },

                            3: {
                                id: 3,
                                content: 'string 3',
                                completed: false
                            },

                            4: {
                                id: 4,
                                content: 'string 4',
                                completed: true
                            }
                        }
                    }
                }, // end of <value 2>

                // state 3 - add new todo
                {
                    FILTERS: {
                        filter: "all"
                    },

                    TODOS: {
                        last_id: 5,

                        todos: {

                            1: {
                                id: 1,
                                content: 'string 1',
                                completed: true
                            },

                            2: {
                                id: 2,
                                content: 'string 2',
                                completed: true
                            },

                            3: {
                                id: 3,
                                content: 'string 3',
                                completed: false
                            },

                            4: {
                                id: 4,
                                content: 'string 4',
                                completed: true
                            },

                            5: {
                                id: 5,
                                content: 'string 5',
                                completed: false
                            }
                        }
                    }
                }, // end of <value 3>

                // state 4 - toggle todo #5
                {
                    FILTERS: {
                        filter: "all"
                    },

                    TODOS: {
                        last_id: 5,

                        todos: {

                            1: {
                                id: 1,
                                content: 'string 1',
                                completed: true
                            },

                            2: {
                                id: 2,
                                content: 'string 2',
                                completed: true
                            },

                            3: {
                                id: 3,
                                content: 'string 3',
                                completed: false
                            },

                            4: {
                                id: 4,
                                content: 'string 4',
                                completed: true
                            },

                            5: {
                                id: 5,
                                content: 'string 5',
                                completed: true
                            }
                        }
                    }
                }, // end of <value 4>

                // state 5 - remove todo #3
                {
                    FILTERS: {
                        filter: "all"
                    },

                    TODOS: {
                        last_id: 5,

                        todos: {

                            1: {
                                id: 1,
                                content: 'string 1',
                                completed: true
                            },

                            2: {
                                id: 2,
                                content: 'string 2',
                                completed: true
                            },

                            4: {
                                id: 4,
                                content: 'string 4',
                                completed: true
                            },

                            5: {
                                id: 5,
                                content: 'string 5',
                                completed: true
                            }
                        }
                    }
                } // end of <value 5>
            ]);

            const expected_reactions = [notificationPostAction('Congrats! You did everything!')];
            const actual_reaction_s = todosCompletedAllNotificationReaction({ todosIncompleteAllSelector, todosAllSelector })(null, { state_s });

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