import { AppState } from '../../index';
import { createSelector } from 'reselect';
import { GenericState } from './model';

const slice = (state: AppState): GenericState => state.generic;

export const selectGenericData = createSelector(slice, (state) => state.data);

export const selectAppName = createSelector(selectGenericData, (state) => state?.appName);
export const selectAppVersion = createSelector(selectGenericData, (state) => state?.appVersion);
export const selectTimestamp = createSelector(selectGenericData, (state) => state?.timeStamp);
