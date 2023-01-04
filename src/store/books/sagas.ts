import { take, put, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { putBooks } from './reducers';
import { booksStoreDefault } from './types';
import serviceApi from '../serviceApi';

// action creator
export const getBooks = createAction('books/getBooks');

// worker
export function* getBooksWorker(): Generator {
    try {
        // start request
        yield put(putBooks({ ...booksStoreDefault, status: 'loading' }));
        
        // make request
        const response = yield call(serviceApi, '/api/books');

        // resolve request
        yield put(putBooks({ ...response as Object, status: 'success' }));
        
    } catch (error) {
        yield put(putBooks({ ...booksStoreDefault, status: 'failed' }));
    }
}

// watcher 
export function* getBooksWatcher() {
    while(true){
        yield take(getBooks.toString());
        yield call(getBooksWorker);
    }
}
