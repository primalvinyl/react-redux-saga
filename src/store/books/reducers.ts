import { createSlice } from '@reduxjs/toolkit';
import { booksStoreDefault } from './types';

const books = createSlice({
    name: 'books',
    initialState: booksStoreDefault,
    reducers: {
        putBooks: (state, action) => ({ ...state, ...action.payload }),
    }
});

export const { putBooks } = books.actions;
export const booksReducer = books.reducer;
