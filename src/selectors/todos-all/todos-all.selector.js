function todosAllSelector(state = {}) {
    return (state.TODOS && state.TODOS.todos) ? Object.values(state.TODOS.todos) : [];
    // I just need the values for the todos keys
    // Object.keys()
    // Object.values()
    // Normally, a selector is expected to return an array with the values it's selecting
    // If there's no values received from the selector, it should return an empty array (or object).
};

export { todosAllSelector };