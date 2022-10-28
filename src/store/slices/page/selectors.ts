import { AppState } from '../../index';
import { createSelector } from 'reselect';
import { PageState } from './model';

const slice = (state: AppState): PageState => state.page;

export const selectPageData = createSelector(slice, (state) => state.data);
export const selectPageFullName = createSelector(selectPageData, (state) => state?.fullName);
