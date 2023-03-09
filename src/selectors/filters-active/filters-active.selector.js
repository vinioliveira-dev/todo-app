function filtersActiveSelector(state = {}) {
    return state.FILTERS && state.FILTERS.filter;
};

export { filtersActiveSelector };