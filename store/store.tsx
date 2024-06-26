import {configureStore} from '@reduxjs/toolkit';
import generateReducer from '../reducers/generateSlice';

export const store = configureStore({
  reducer: {
    generate: generateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
