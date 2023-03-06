const testReactionS = (TEST_NAME, t, { expected_reactions, onEndReactions }) => (reaction_s) => {
    let count_reactions = 0;

    return reaction_s.takeWhile(() => count_reactions <= expected_reactions.length)
        .onValue((reaction, expected_reaction) => {
            t.deepEqual(reaction, expected_reactions[count_reactions], 'should react with the expected action');
            count_reactions++;
        }).onEnd(() => {
            t.equal(count_reactions, expected_reactions.length, `should call all the expected reactions: ${ expected_reactions.length }`);
            if(typeof onEndReactions === 'function') onEndReactions(t);
            t.end();
        }).onError(error => {
            t.fail(`An error happened during test excution of ${TEST_NAME}: ${error}`);
            t.end();
        });
};

export {
    testReactionS as default
};