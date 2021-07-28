import dragrReducer from './drag-reducer';
import { combineReducers } from 'redux';
import actionBar from './action-bar';

export default combineReducers({
  dragrReducer,
  actionBarReducer: actionBar,
});
