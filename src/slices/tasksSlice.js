import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    removeTask: (state, action) => {
      const { id } = action.payload;
      const index = state.value.findIndex((task) => task.id === id);
      state.value.splice(index, 1);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
