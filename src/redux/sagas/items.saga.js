import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllItems() {
    // get all items from the DB
    try {
        const items = yield axios.get('/api/items');
        console.log('get all:', items.data);
        yield put({ type: 'SET_ITEMS', payload: items.data });
    } catch {
        console.log('get all error');
    }     
}

function* itemsSaga() {
    yield takeLatest('FETCH_USER', fetchAllItems);
}

export default itemsSaga;