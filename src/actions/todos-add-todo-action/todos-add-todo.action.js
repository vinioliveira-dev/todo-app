const ACTION_NAME = `TODOS_ADD_TODO`;

function todosAddTodoAction (todo_content = '') {
    return {
        type: ACTION_NAME,
        payload: { content: todo_content }
    };
}

export {
    todosAddTodoAction,
    ACTION_NAME as default
}