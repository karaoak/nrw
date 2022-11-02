import { AppState } from '../../index';
import { createSelector } from 'reselect';
import { GenericState } from './model';

const slice = (state: AppState): GenericState => state.generic;

export const selectGenericData = createSelector(slice, (state) => state.data);

// @ts-ignore
export const selectAppName = createSelector(selectGenericData, (state) => state.appName);
// @ts-ignore
export const selectAppVersion = createSelector(selectGenericData, (state) => state.appVersion);
// @ts-ignore
export const selectTimestamp = createSelector(selectGenericData, (state) => state.timeStamp);
