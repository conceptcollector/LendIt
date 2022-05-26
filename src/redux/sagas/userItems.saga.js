import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchUserItems(action) {
    // get all items from the DB
    try {
        const userID = action.payload;
        console.log('fetchUserItems userID =', userID);
        const response = yield axios ({
            method: 'GET',
            url: `/api/userItems`
        });
        yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch {
        console.log('get all error');
    }     
}

function* deleteItem(action) {
    const response = yield axios({
        method: 'DELETE',
        url: `/api/items/${action.payload}`
    })
    yield put({
        type: 'FETCH_USER_ITEMS'
    })
}

function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItems);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default userItemsSaga;