import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChangeStatPayload {
    statsType: keyof StatsState;
    sum: number;
}

interface StatsState {
    followers: number;
    following: number;
}

const statsSlice = createSlice({
    name: "stats",
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStat: {
            reducer: (state, action: PayloadAction<ChangeStatPayload>) => {
                let res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res < 0 ? 0 : res;
            },
            prepare: (statsType: keyof StatsState, sum: number) => ({ payload: { statsType, sum } })
        }
    }
});

export const { changeStat } = statsSlice.actions;
export default statsSlice.reducer;