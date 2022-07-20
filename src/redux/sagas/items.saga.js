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

function* fetchRecentItems() {
    const recentItems = yield axios.get('/api/items/recent');
    yield put ({ type: 'SET_RECENT_ITEMS', payload: recentItems.data});
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchAllItems);
    yield takeLatest('FETCH_RECENT_ITEMS', fetchRecentItems);
}

export default itemsSaga;