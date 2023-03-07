const ACTION_NAME = `FILTER_SET`;

function filterSetAction (filter) {
    return {
        type: ACTION_NAME,
        payload: { filter }
    };
};

export {
    filterSetAction,
    ACTION_NAME as default
};