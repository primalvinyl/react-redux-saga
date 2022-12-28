export interface BookType {
    title: string;
    author: string;
}

export interface BooksResponseType {
    list: Array<BookType>;
}

export interface BooksStoreType {
    list: Array<BookType>;
    status: 'idle' | 'loading' | 'success' | 'failed';
}

export const booksStoreDefault: BooksStoreType = {
    list: [],
    status: 'idle',
};
