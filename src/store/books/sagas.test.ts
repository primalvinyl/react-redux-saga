import { expectSaga } from 'redux-saga-test-plan';
import * as reducers from './reducers';
import * as sagas from './sagas';
import * as mocks from './mocks';

describe('getBooksWorker', () => {
    it('gets and puts data', () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: () => Promise.resolve(mocks.booksResponseMock)
        });
        
        return expectSaga(sagas.getBooksWorker)
            .put(reducers.putBooks(mocks.booksStoreMock))
            .withReducer(reducers.booksReducer)
            .hasFinalState(mocks.booksStoreMock)
            .run();
    });
});

describe('getBooksWatcher', () => {
    it('listens for action', () => {
        return expectSaga(sagas.getBooksWatcher)
            .dispatch(sagas.getBooks())
            .silentRun();
    });
});
