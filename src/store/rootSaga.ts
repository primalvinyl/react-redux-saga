import { fork, all } from 'redux-saga/effects';
import { getBooksWatcher } from './books/sagas';

export default function* rootSaga() {
    yield all([
        fork(getBooksWatcher),
    ]);
};
