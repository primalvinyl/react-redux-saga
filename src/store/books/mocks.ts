import * as types from './types';

export const booksResponseMock: types.BooksResponseType = {
    list: [{
        title: 'Moby Dick',
        author: 'Herman Melville',
    }],
};

export const booksStoreMock: types.BooksStoreType = {
    list: [{
        title: 'Moby Dick',
        author: 'Herman Melville',
    }],
    status: 'success',
};
