import { AppState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';
import { DetailState } from './model';

const slice = (state: AppState): DetailState => state.detail;

export const selectDetailData = createSelector(slice, (state) => state.data);
// @ts-ignore
export const selectDetailFullName = createSelector(selectDetailData, (state) => state.fullName);
