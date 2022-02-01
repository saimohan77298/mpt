import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer as Assignment } from "./assignment";

export const store = configureStore({
  reducer: {
    assignment: Assignment,
  },
  middleware: [...getDefaultMiddleware()],
});
