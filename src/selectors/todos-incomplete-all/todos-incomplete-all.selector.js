function todosIncompleteAllSelector(state = {}) {
    const todos = state?.TODOS_REDUCER?.todos;

    if (!todos) {
        return undefined;
    }

    const incompleteTodos = Object.entries(todos || {})
        .filter(([id, todo]) => !todo.completed)
        .reduce((completedTodos, [id, todo]) => {
            completedTodos[id] = todo;
            return completedTodos;
        }, {});

    return Object.keys(incompleteTodos).length ? incompleteTodos : 'all to-dos were done';
};

export { todosIncompleteAllSelector };