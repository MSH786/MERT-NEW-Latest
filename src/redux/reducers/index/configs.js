import AsyncStorage from '@react-native-community/async-storage';

export const authPersistConfig = {
  key: 'alicibulapp_auth',
  storage: AsyncStorage,
  version: '1.0.0',
  blacklist: ['authError', 'authLoading'],
};

export const mainShowcaseConfig = {
  key: 'alicibulapp_mainShowcase',
  storage: AsyncStorage,
  version: '1.0.0',
  blacklist: ['fetchError', 'fetchLoading'],
};
