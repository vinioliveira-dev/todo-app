function filtersActiveSelector(state = {}) {
    if (state.hasOwnProperty('FILTERS_REDUCER') && state.FILTERS_REDUCER.hasOwnProperty('filter')) {
        return state.FILTERS_REDUCER.filter;
    }
};

export { filtersActiveSelector };