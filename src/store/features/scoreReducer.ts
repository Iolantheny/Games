import { createSlice } from '@reduxjs/toolkit';

interface ScoreState {
  score: number;
}

const initialState: ScoreState = {
  score: 0,
};

const scoreSlicer = createSlice({
    name: 'score',
    initialState,
    reducers: {
      increment(state) {
        state.score += 1;
      },
      decrement(state) {
        state.score -= 1;
      },
    },
  });

  export const { increment, decrement } = scoreSlicer.actions;
export default scoreSlicer.reducer;