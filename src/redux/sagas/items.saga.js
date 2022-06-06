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

function* fetchOneItem(action) {
    const itemId = action.payload;
    const response = yield axios({
        method: 'GET',
        url: `/api/items/${itemId}`
    })
    yield put({
        type: 'SET_EDIT_ITEM',
        payload: response.data
    })
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchAllItems);
    yield takeLatest('FETCH_ITEM', fetchOneItem);
}

export default itemsSaga;