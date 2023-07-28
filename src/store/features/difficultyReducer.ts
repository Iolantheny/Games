import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DifficultyOption {
  value: number;
  label: string;
  time: number;
  mole: number;
  isActive: boolean;
}

interface DifficultyState {
  difficultyOptions: DifficultyOption[];
}

const initialState: DifficultyState = {
  difficultyOptions: [
    {
        value: 1,
        label: "easy",
        time: 1,
        mole: 1,
        isActive: true,
      },
      {
        value: 2,
        label: "medium",
        time: 2,
        mole: 2,
        isActive: false,
      },
      {
        value: 3,
        label: "hard",
        time: 3,
        mole: 3,
        isActive: false,
      },
  ],
};

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState,
  reducers: {
    setDifficulty(state, action: PayloadAction<number>) {
      const value = action.payload;
      state.difficultyOptions = state.difficultyOptions.map((option) => ({
        ...option,
        isActive: option.value === value,
      }));
    },
  },
});

export const { setDifficulty } = difficultySlice.actions;
export default difficultySlice.reducer;
