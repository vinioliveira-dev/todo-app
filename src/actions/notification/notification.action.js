const ACTION_NAME = `NOTIFICATION`;

function notificationAction (message = '') {
    return {
        type: ACTION_NAME,
        payload: message
    }
}

export {
    notificationAction,
    ACTION_NAME as default
}