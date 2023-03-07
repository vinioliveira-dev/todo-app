import test from 'tape';
import _sinon from 'sinon';
import Kefir from 'kefir';

import { todosCompletedToggleAction } from '../../actions/todos-completed-toggle/todos-completed-toggle.action.js';
import { todosDeleteAction } from '../../actions/todos-delete/todos-delete.action.js';
import { todosDeleteCompletedReaction } from './todos-delete-completed.reaction.js';

const TEST_NAME = `todosDeleteCompletedReactionModule`;

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the reaction 'todosDeleteCompletedReaction'`, (t) => {
        t.equal(typeof todosDeleteCompletedReaction, 'function', 'should be a function');
        t.end();
    });

    t.test(`${TEST_NAME}: when 'todosCompletedToggleAction' is called, the reaction:`, (t) => {
        try{
            const mock_store = {
                getState: () => ({
                    todos: {
                        1: {
                            content: 'anything',
                            completed: false
                        }
                    }
                })
            };

            const action = todosCompletedToggleAction(1);
            const action_s = Kefir.constant(action);

            const expected_reactions = todosDeleteAction(1);
            const actual_reaction_s = todosDeleteCompletedReaction(action_s, mock_store);

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