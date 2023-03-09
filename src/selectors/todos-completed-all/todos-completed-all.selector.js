function todosCompletedAllSelector(state = {}) {
    return (state.TODOS.todos) ? Object.values(state.TODOS.todos).filter(todo => todo.completed) : [];
};

export { todosCompletedAllSelector };
// return todo objects inside an array, like they are when it's on a DB
// search .fromEntries - it does the same that .reduce is doing here...