import {createSlice} from "@reduxjs/toolkit";


export const initialValidationState = {
  open: false,
}

export const validationSlice = createSlice({
  name: 'validation',
  initialState: initialValidationState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    clear: state => {
      state.open = false;
    }
  },
})
