import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { GenericState } from './model';

const initialState: GenericState = {
  data: null,
};

export const slice = createSlice({
  name: 'generic',

  initialState,

  reducers: {
    setGeneric(state, action) {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(`generic slice : ${JSON.stringify(action)}`);
      return { ...state, ...action.payload.generic };
    },
  },
});

export const { setGeneric } = slice.actions;

export const { reducer } = slice;
