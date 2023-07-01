import { ActionType } from './types';

export const toggleGame = (isGameOn: boolean) => ({
  type: ActionType.TOGGLE_GAME,
  payload: isGameOn,
});