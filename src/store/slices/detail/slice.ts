import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { DetailState } from './model';

const initialState: DetailState = {
    data: null,
};

export const slice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('action: ', JSON.stringify(action, null, 4));
            if (action.payload.detail.data !== initialState.data) {
                console.log(`detail slice    : ${JSON.stringify(action)}`);
                return { ...state, ...action.payload.detail };
            }
        },
    },
});

export const { setData } = slice.actions;

export const { reducer } = slice;
