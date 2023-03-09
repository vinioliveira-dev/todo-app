const ACTION_NAME = `TODOS_ADD`;

function todosAddAction (content = '') {
    return {
        type: ACTION_NAME,
        payload: (typeof content === 'string') ? { content } : { content: `${content}` }
    };
}

export {
    todosAddAction,
    ACTION_NAME as default
}