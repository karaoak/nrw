import { AppState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';
import { PageState } from './model';

const slice = (state: AppState): PageState => state.page;

export const selectPageData = createSelector(slice, (state) => state.data);
// @ts-ignore
export const selectPageFullName = createSelector(selectPageData, (state) => state.fullName);
