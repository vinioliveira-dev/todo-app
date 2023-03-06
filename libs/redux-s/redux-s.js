import Kefir from 'kefir';

// to use in combination of thru: action_s.thru(catchError(onErrorDoAction))
const catchError = errorAction => reaction_s => reaction_s.withHandler((emitter, event) => {
    switch(event.type) {
        case 'end':
            return emitter.end();
        case 'error':
            return emitter.emit(errorAction(event.value));
        case 'value':
            return emitter.emit(event.value);
    }
});

const combineReactions = (...reactions) => (...reaction_arguments) => Kefir.merge(
    reactions.map(function(reaction) {
        var reaction_s = reaction.apply(null, reaction_arguments);
        if (!reaction_s) {
            throw new TypeError(`combineReactions: one of the provided reactions ${reaction.name || '<anonymous>'} does not return a stream. Double check you\'re not missing a return statement!`);
        }
        return reaction_s;
    })
);

function createReactionEnhancer() {
    var action_emitter;
    var action_s = Kefir.stream(function (emitter) {
        action_emitter = emitter;
    });

    const plugReaction = final_store => {// we need to dispatch the final composed version of dispatch
        const dynamic_reaction_s = Kefir.pool();
        dynamic_reaction_s.onValue(final_store.dispatch);

        return reaction => {
            const reaction_s = reaction(action_s, {
                getState: final_store.getState,//backward compatibility
                state_s: final_store.state_s
            });
            if (!reaction_s) {
                throw new TypeError(`Your reaction ${reaction.name || '<anonymous>'} does not return a stream. Double check you\'re not missing a return statement!`);
            }
            const plug = () => dynamic_reaction_s.plug(reaction_s);
            const unplug = () => dynamic_reaction_s.unplug(reaction_s);

            return plug() && unplug;
        };
    };

    const enhancer = createStore => (reducer, preloaded_state, enhancer) => {
        const store = createStore(reducer, preloaded_state, enhancer);
        const state_s = createStateS(store);

        const originalDispatch = store.dispatch;
        const enhancedDispatch = (action) => {
            var result = originalDispatch(action);
            action_emitter.emit(action);// action is emitted after store has been updated
            return result;
        };

        return {
            ...store,
            dispatch: enhancedDispatch,
            state_s
        };
    };

    return { enhancer, plugReaction };
}

function createStateS(store) {
    return Kefir.stream(function(emitter) {

      // TODO let's send a clone of the state?? so no body can change it
      // but how to know when the state changes if you always send a clone = new object?
      // UPDATE: maybe with const in ES6 would be enough

        var unsubscribe = store.subscribe(function() {
            setTimeout(function(){//allow other threads/actions to be executed before the new state is notified
                emitter.emit(store.getState());
            });
        });

        emitter.emit(store.getState());// to send the initial state
        //emitter.end();??

        return function() {
            unsubscribe();
        };

    }).toProperty();//having a property on subscription you will always get the current state ;)
}

// For checking types
const anyType = types => action => types.indexOf(action.type) > -1;
const isCompoundAction = types => action => _isCompoundAction(types, action);//types could be an array of any combination of string/anyType([string, ...])/isType(string)/matchType(exp)
const isType = type => action => action.type === type;
const matchType = exp => action => action.type && action.type.match(exp);

function _isCompoundAction(types, action, is_compound) {
    if(!types  || !types.length) {
        return is_compound;
    } else {
        const [ type, ...inner_types ] = types;
        const checkActionType = (typeof type === 'function') ? type : isType(type);
        const inner_action = (action.payload && action.payload.action) || action.payload || {};

        return checkActionType(action) && _isCompoundAction(inner_types, inner_action, true);
    }
}

export {
    anyType,
    catchError,
    combineReactions,
    createReactionEnhancer,
    createStateS,
    isCompoundAction,
    isType,
    matchType
}