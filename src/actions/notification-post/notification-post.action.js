const ACTION_NAME = `NOTIFICATION_POST`;

function notificationPostAction (message = '') {
    return {
        type: ACTION_NAME,
        payload: message
    }
}

export {
    notificationPostAction,
    ACTION_NAME as default
}