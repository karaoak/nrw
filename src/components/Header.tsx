import React from 'react';
import { useSelector } from 'react-redux';
import { selectAppName, selectAppVersion, selectTimestamp } from '../store/slices/generic/selectors';

export const Header: React.FC = () => {
  const appName = useSelector(selectAppName);
  const appVersion = useSelector(selectAppVersion);
  const timestamp = useSelector(selectTimestamp);
  return (
    <div style={{ backgroundColor: 'pink', padding: '20px' }}>
      app: {appName} version: {appVersion} ({timestamp})
    </div>
  );
};
