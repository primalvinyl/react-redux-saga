import { expectSaga } from 'redux-saga-test-plan';
import * as reducers from './reducers';
import * as sagas from './sagas';
import * as mocks from './mocks';

describe('getBookListWorker', () => {
    it('gets and puts data', () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: () => Promise.resolve(mocks.bookListResponseMock)
        });
        
        return expectSaga(sagas.getBookListWorker)
            .put(reducers.putBookList(mocks.bookListStoreMock))
            .withReducer(reducers.bookListReducer)
            .hasFinalState(mocks.bookListStoreMock)
            .run();
    });
});

describe('getBookListWatcher', () => {
    it('listens for action', () => {
        return expectSaga(sagas.getBookListWatcher)
            .dispatch(sagas.getBookList())
            .silentRun();
    });
});
