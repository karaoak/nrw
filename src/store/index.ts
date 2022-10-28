import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import { reducer as generic } from './slices/generic/slice';
import { reducer as page } from './slices/page/slice';

const reducers = { generic, page };

const reducer = combineReducers(reducers);

const makeStore = () => configureStore({ reducer });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);