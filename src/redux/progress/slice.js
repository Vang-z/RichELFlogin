import {createSlice} from "@reduxjs/toolkit";


export const initialProgressState = {
  value: 0,
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState: initialProgressState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    }
  },
})
