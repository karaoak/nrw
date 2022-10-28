interface GenericData {
  appName: string;
  appVersion: string;
  timeStamp: number;
}

export interface GenericState {
  data: GenericData | null;
}
