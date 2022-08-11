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

function* addItem(action) {
    const response = yield axios({
        method: 'POST',
        url: '/api/userItems',
        data: action.payload
    })
}

function* fetchOneItem(action) {
    const itemId = action.payload;
    const response = yield axios({
        method: 'GET',
        url: `/api/userItems/${itemId}`
    })
    yield put({
        type: 'SET_EDIT_ITEM',
        payload: response.data
    })
}

function* updateItem(action) {
    try {
    const itemToEdit = action.payload;
    const response = yield axios({
        method: 'POST',
        url: `/api/userItems/${itemToEdit.id}`,
        data: itemToEdit
    })
    yield put({
        type: 'FETCH_USER_ITEMS'
    })
    } catch (error) {
        console.log(error);
    }
}

function* deleteItem(action) {
    const response = yield axios({
        method: 'DELETE',
        url: `/api/userItems/${action.payload}`
    })
    yield put({
        type: 'FETCH_USER_ITEMS'
    })
}

function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItems);
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('FETCH_ITEM', fetchOneItem);
    yield takeLatest('UPDATE_ITEM', updateItem);
    yield takeLatest('ADD_ITEM', addItem);
}

export default userItemsSaga;