import { SketchStoreState } from "./sketchStoreState";
import {
  SidebarActionTypes,
  ADD_SKETCH, REMOVE_SKETCH,
} from "./actions";

export const INITIAL_STATE: SketchStoreState = {
  sketches: [],
  selectedSketchId: null,
};

const reducer = (state = INITIAL_STATE,action: SidebarActionTypes): SketchStoreState => {
  switch(action.type) {
    case ADD_SKETCH:
      return {
          ...state,
          sketches: [...state.sketches, action.payload],
        };
    case REMOVE_SKETCH:
      return {
        ...state,
        sketches: state.sketches.filter(s => s.id !== action.payload)
      }
    default:
      return state;
  }
};

export default reducer;