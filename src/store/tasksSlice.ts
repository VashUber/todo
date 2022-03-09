import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskState } from "../types";

const initialState: TaskState = {
	tasks: [],
};

export const tasksSlice = createSlice({
	name: "tasksState",
	initialState,
	reducers: {
		addNewTask: (state, action: PayloadAction<Task>) => {
			state.tasks.push(action.payload);
		},
		setTaskComplete: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.map((elem) => {
				if (elem.id === action.payload) return { ...elem, complete: !elem.complete };
				return elem;
			});
		},
	},
});

export const { addNewTask, setTaskComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
