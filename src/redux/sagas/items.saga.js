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

function* addItem(action) {
    console.log('This is the items.saga addItem', action.payload);
    const response = yield axios ({
        method: 'POST',
        url: '/api/items',
        data: action.payload
    })
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchAllItems);
    yield takeLatest('ADD_ITEM', addItem);
}

export default itemsSaga;