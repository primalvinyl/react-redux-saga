import * as reducers from './reducers';
import * as types from './types';
import * as mocks from './mocks';

describe('books reducer', () => {
    it('should put new book list', () => {
        const response = reducers.bookListReducer(
            undefined,
            reducers.putBookList(mocks.bookListStoreMock)
        );
        expect(response).toEqual(mocks.bookListStoreMock);
    });
});
