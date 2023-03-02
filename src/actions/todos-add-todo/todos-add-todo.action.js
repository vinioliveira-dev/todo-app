const ACTION_NAME = `TODOS_ADD_TODO`;

let next_id = 0;

function addTodoAction (todo_content = '') {
    return {
        type: ACTION_NAME,
        payload: {
            id: ++next_id,
            content: todo_content,
        }
    };
}

export {
    addTodoAction,
    ACTION_NAME as default
}