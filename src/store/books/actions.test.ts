import * as reducers from './reducers';
import * as sagas from './sagas';
import * as mocks from './mocks';

describe('getBooks', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: sagas.getBooks.toString(),
            payload: undefined,
        };
        const actualResult = sagas.getBooks();
        expect(actualResult).toEqual(expectedResult);
    });
});

describe('putBooks', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: reducers.putBooks.toString(),
            payload: mocks.booksStoreMock,
        };
        const actualResult = reducers.putBooks(mocks.booksStoreMock);
        expect(actualResult).toEqual(expectedResult);
    });
});
