function todosIncompleteAllSelector(state = {}) {
    const todos = state?.TODOS_REDUCER?.todos;
    if (!todos) {
        return undefined;
    }
    return Object.entries(todos)
        .filter(([id, todo]) => !todo.completed)
        .reduce((completedTodos, [id, todo]) => {
            completedTodos[id] = todo;
            return completedTodos;
        }, {});      
};

export { todosIncompleteAllSelector };