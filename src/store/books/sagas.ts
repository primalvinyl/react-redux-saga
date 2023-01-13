import { take, put, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { putBookList } from './reducers';
import { bookListStoreDefault } from './types';
import serviceApi from '../serviceApi';

// get book list
export const getBookList = createAction('books/getBookList');

export function* getBookListWorker(): Generator {
    // start request
    yield put(putBookList({ ...bookListStoreDefault, status: 'loading' }));

    try {
        // make request
        const response = yield call(serviceApi, '/api/books');

        // resolve request
        yield put(putBookList({ ...response as Object, status: 'success' }));
        
    } catch (error) {
        yield put(putBookList({ ...bookListStoreDefault, status: 'failed' }));
    }
}

export function* getBookListWatcher() {
    while(true){
        yield take(getBookList.toString());
        yield call(getBookListWorker);
    }
}
