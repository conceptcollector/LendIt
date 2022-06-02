const coversReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COVERS':
            return action.payload;
        default:
            return state;
    }
}

export default coversReducer;