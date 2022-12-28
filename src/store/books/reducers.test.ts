import * as reducers from './reducers';
import * as types from './types';
import * as mocks from './mocks';

describe('books reducer', () => {
    it('should put new books list', () => {
        const response = reducers.booksReducer(
            undefined,
            reducers.putBooks(mocks.booksStoreMock)
        );
        expect(response).toEqual(mocks.booksStoreMock);
    });
});
