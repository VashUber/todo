import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

export const tasksSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
})

export const {} = tasksSlice.actions

export default tasksSlice.reducer
 