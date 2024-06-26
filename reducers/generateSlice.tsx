import {createSlice} from '@reduxjs/toolkit';

interface GenerateState {
  value: boolean;
}

const initialState: GenerateState = {
  value: false,
};

const generateReducer = createSlice({
  name: 'generate',
  initialState,
  reducers: {
    pressed: state => {
      state.value = true;
    },
  },
});

export const {pressed} = generateReducer.actions;
export default generateReducer.reducer;
