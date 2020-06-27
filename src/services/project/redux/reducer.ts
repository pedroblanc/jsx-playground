import { ProjectState } from './projectState';
import { SourceFile } from '..';
import {
  SourceFileAction,
  ADD_SOURCE, REMOVE_SOURCE, SET_ACTIVE_SOURCE, SET_SOURCES_LIST, PATCH_SOURCE, PayloadTypes,
} from './actions';

export const INITIAL_STATE: ProjectState = {
  sourceFiles: [],
  activeSourceFileId: null,
};

const reducer = (state = INITIAL_STATE, action: SourceFileAction<PayloadTypes>): ProjectState => {
  switch (action.type) {
    case SET_SOURCES_LIST:
      return {
        ...state,
        sourceFiles: action.payload as SourceFile[],
      };
    case ADD_SOURCE:
      return {
        ...state,
        sourceFiles: [...state.sourceFiles, action.payload as SourceFile],
      };
    case REMOVE_SOURCE:
      return {
        ...state,
        sourceFiles: state.sourceFiles.filter((s) => s.id !== action.payload),
      };
    case SET_ACTIVE_SOURCE:
      return {
        ...state,
        activeSourceFileId: action.payload as number,
      };
    case PATCH_SOURCE:
      return {
        ...state,
        sourceFiles: state.sourceFiles.map((s) => {
          const patch = action.payload as Partial<SourceFile>;
          if (s.id === patch?.id) {
            return {
              ...s,
              ...patch,
            };
          }

          return s;
        }),
      };
    default:
      return state;
  }
};

export default reducer;