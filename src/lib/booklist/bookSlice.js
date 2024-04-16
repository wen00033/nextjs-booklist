"use client";

import { createSlice } from "@reduxjs/toolkit";
import data from "@/utils/data";

const initialState = {
  book: data,
};

const bookSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    deleteBook(state, action) {
      state.book = state.book.filter((book) => book.id !== action.payload);
    },
    addBook(state, action) {
      state.book.unshift(action.payload);
    },
    updateBook(state, action) {
      state.book = state.book.map((book) =>
        book.id == action.payload.id ? action.payload : book
      );
    },
  },
});

export const { deleteBook, addBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
