"use client";
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./booklist/bookSlice";

export const Store = () => {
  return configureStore({
    reducer: {
      bookList: bookReducer,
    },
  });
};
