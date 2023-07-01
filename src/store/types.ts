export enum ActionType {
    TOGGLE_GAME = 'TOGGLE_GAME',
  }
  
  export interface ToggleGameAction {
    type: ActionType.TOGGLE_GAME;
    payload: boolean;
  }
  
  export type AppAction = ToggleGameAction;
  
  export interface AppState {
    isGameOn: boolean;
  }
  
  export interface RootState {
    app: AppState;
  }