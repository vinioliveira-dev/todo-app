const ACTION_NAME = `TODOS_DELETE_TODO`;

function todosDeleteTodoAction (id) {
    return {
        type: ACTION_NAME,
        payload: { id }
    };
}

export {
    todosDeleteTodoAction,
    ACTION_NAME as default
}