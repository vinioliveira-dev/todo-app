const ACTION_NAME = `TODOS_COMPLETED_TOGGLE`;

function todosCompletedToggleAction(id) {
    return {
        type: ACTION_NAME,
        payload: id
    };
}

export {
    todosCompletedToggleAction,
    ACTION_NAME as default
}