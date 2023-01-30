import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface validationState{
  open: boolean;
}

export const initialValidationState:validationState = {
  open: false,
};

export const validationSlice = createSlice({
  name: 'validation',
  initialState: initialValidationState,
  reducers: {
    setOpen: (state, action:PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    clear: state => {
      state.open = false;
    }
  },
})
