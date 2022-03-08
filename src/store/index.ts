import { configureStore } from "@reduxjs/toolkit";
import taskReduce from "./tasksSlice";

export const store = configureStore({
	reducer: { tasksState: taskReduce },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch