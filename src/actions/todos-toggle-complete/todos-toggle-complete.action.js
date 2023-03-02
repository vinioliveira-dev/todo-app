const ACTION_NAME = `TODOS_TOGGLE_COMPLETE`;

function toggleTodoAction(id) {
    return {
        type: ACTION_NAME,
        payload: { id }
    };
}

export {
    toggleTodoAction,
    ACTION_NAME as default
}