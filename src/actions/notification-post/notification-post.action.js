const ACTION_NAME = `NOTIFICATION_POST`;

function notificationPostAction (message = '') {
    return {
        type: ACTION_NAME,
        payload: (typeof message === 'string') ? message : `${message}`
    }
}

export {
    notificationPostAction,
    ACTION_NAME as default
}