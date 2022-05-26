import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchUserItems() {
    // get all items from the DB
    try {
        const user = yield axios.get('/api/userItems');
        console.log('get all for user:', user.data);
        yield put({ type: 'SET_ITEMS', payload: items.data });
    } catch {
        console.log('get all error');
    }     
}

function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItems);
}

export default userItemsSaga;