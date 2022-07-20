import { combineReducers } from 'redux';

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
}

const recentItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECENT_ITEMS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    itemsReducer,
    recentItemsReducer
});