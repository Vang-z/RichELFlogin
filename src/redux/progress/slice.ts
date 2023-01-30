import {createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface progressState{
  value:number
}
export const initialProgressState:progressState = {
  value: 0,
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState: initialProgressState,
  reducers: {
    setValue: (state, action:PayloadAction<number>) => {
      state.value = action.payload;
    }
  },
})
