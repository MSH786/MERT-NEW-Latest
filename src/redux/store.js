import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
//import immutableTransform from 'redux-persist-transform-immutable';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './reducers/index/index';
import rootSaga from './sagas/index';

//Persistor will be added to persist necessary datas even if users close the app.

const persistConfig = {
  key: 'alicibulapp',
  storage: AsyncStorage,
  version: '1.0.0',
  blacklist: ['auth', 'mainShowcase'],
};

//The implementation of below is gonna tracks all state based on persistence.


/*/
const MyRecord = Record(
  {
    userCredentials: null,
  },
  'MyRecord',
);
/*/

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

  const persistor = persistStore(
    store,
    null,
    //It will be sent to the general redux state to check if rehydrate done or not
    () => {
      console.log('rehydration is done');
    },
  );

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
