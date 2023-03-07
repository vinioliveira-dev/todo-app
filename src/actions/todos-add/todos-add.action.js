const ACTION_NAME = `TODOS_ADD`;

function todosAddAction (content = '') {
    return {
        type: ACTION_NAME,
        payload: { content }
    };
}

export {
    todosAddAction,
    ACTION_NAME as default
}