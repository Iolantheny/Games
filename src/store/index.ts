import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameReducer from './features/gameReducer';
import scoreReducer from './features/scoreReducer';
import difficultyReducer from './features/difficultyReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  score: scoreReducer,
  difficulty: difficultyReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;