const ACTION_NAME = `TODOS_TOGGLE_COMPLETE`;

function todosToggleCompleteAction(id) {
    return {
        type: ACTION_NAME,
        payload: { id }
    };
}

export {
    todosToggleCompleteAction,
    ACTION_NAME as default
}