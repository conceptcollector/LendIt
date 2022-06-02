import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* fetchCovers() {
    // get all items from the DB
    try {
        const covers = yield axios.get('/api/carousel');
        console.log('get all:', covers.data);
        yield put({type: 'SET_COVERS', payload: covers.data});
    } catch {
        console.log('get all error');
    }     
}

function* coversSaga() {
    yield takeLatest('FETCH_COVERS', fetchCovers);
}

export default coversSaga;