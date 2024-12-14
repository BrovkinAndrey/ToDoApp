import { configureStore } from "@reduxjs/toolkit";
import tasksReduser from "./tasksSlice.js"

export const store = configureStore({
  reducer: {
    tasks: tasksReduser,
  },
});
