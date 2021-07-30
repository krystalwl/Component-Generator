import dragrReducer from './drag-reducer';
import { combineReducers } from 'redux';
import actionBar from './action-bar';
import selectDrag from './select-drag';

export default combineReducers({
  dragrReducer,
  actionBarReducer: actionBar,
  selectDragReducer: selectDrag,
});
