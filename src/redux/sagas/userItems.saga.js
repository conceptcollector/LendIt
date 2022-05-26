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

function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItems);
}

export default userItemsSaga;