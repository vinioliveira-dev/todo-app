const ACTION_NAME = `TODOS_DELETE`;

function todosDeleteAction (id) {
    return {
        type: ACTION_NAME,
        payload: id
    };
}

export {
    todosDeleteAction,
    ACTION_NAME as default
}