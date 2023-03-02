const ACTION_NAME = `FILTERS_SET_FILTER`;

function filtersSetFilterAction (filter) {
    return {
        type: ACTION_NAME,
        payload: { filter }
    };
};

export {
    filtersSetFilterAction,
    ACTION_NAME as default
};