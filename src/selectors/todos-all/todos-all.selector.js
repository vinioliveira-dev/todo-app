function todosAllSelector(state = {}) {
    if (state.hasOwnProperty('TODOS_REDUCER') && state.TODOS_REDUCER.hasOwnProperty('todos')) {
        return state.TODOS_REDUCER.todos;
    }
};

export { todosAllSelector };