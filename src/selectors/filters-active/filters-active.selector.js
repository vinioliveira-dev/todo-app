function filtersActiveSelector(state = {}) {
    return (state.FILTERS && state.FILTERS.filter) ? [state.FILTERS.filter] : [];
};

export { filtersActiveSelector };