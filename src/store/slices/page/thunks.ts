import { AppThunk } from '../../index';

import { setData } from './slice';

export const fetchPageData =
  (name: string): AppThunk =>
  async (dispatch) => {
    const timeoutPromise = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

    await timeoutPromise(200);

    dispatch(setData({ fullName: name.toUpperCase()}));
  };
