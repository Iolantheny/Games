import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameReducer from './features/gameReducer';

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;