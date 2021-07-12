import {combineReducers} from 'redux';
import authReducer from '../auth';
import mainShowcaseReducer from '../mainShowcase';
import {persistReducer} from 'redux-persist';
import {authPersistConfig, mainShowcaseConfig} from './configs';

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  mainShowcase: persistReducer(mainShowcaseConfig, mainShowcaseReducer),
});

export default rootReducer;
