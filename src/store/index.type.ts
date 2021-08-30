import { ACTION_BAR_KEY } from './actionBar.slice';
import { SLICE_STAGE } from './stage.slice';
import { SELECT_DRAG_KEY } from './select-drag.slice';
export interface stateTypes {
  [ACTION_BAR_KEY]: any[];
  [SLICE_STAGE]: any[];
  [SELECT_DRAG_KEY]: {};
}
