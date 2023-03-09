function todosIncompleteAllSelector(state = {}) {
    return (state.TODOS?.todos) ? Object.values(state.TODOS.todos).filter(todo => !todo.completed) : [];
};

export { todosIncompleteAllSelector };