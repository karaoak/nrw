import { AppThunk } from '../../index';

import { setGeneric } from './slice';

export const fetchAppData = (): AppThunk => async (dispatch) => {
  const timeoutPromise = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

  await timeoutPromise(200);

  dispatch(
    setGeneric({
      appName: 'Test App',
      appVersion: '1.0.0',
      timeStamp: new Date().getTime(),
    })
  );
};
