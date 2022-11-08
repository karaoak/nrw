import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { PageState } from './model';

const initialState: PageState = {
    data: null,
};

export const slice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            if (action.payload.page.data !== initialState.data) {
                console.log(`page slice    : ${JSON.stringify(action)}`);
                return { ...state, ...action.payload.page };
            }
        },
    },
});

export const { setData } = slice.actions;

export const { reducer } = slice;
