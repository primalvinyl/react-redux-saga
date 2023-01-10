import { createSlice } from '@reduxjs/toolkit';
import { bookListStoreDefault } from './types';

const bookList = createSlice({
    name: 'bookList',
    initialState: bookListStoreDefault,
    reducers: {
        putBookList: (state, action) => ({ ...state, ...action.payload }),
    }
});

export const { putBookList } = bookList.actions;
export const bookListReducer = bookList.reducer;
