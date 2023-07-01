import { ActionType, AppAction } from '../types';

interface GameState {
  isGameOn: boolean;
}

const initialState: GameState = {
  isGameOn: false,
};

const gameReducer = (state = initialState, action: AppAction): GameState => {
  switch (action.type) {
    case ActionType.TOGGLE_GAME:
      return {
        ...state,
        isGameOn: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;