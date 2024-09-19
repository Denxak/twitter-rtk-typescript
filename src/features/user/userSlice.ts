import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    reducers: {
        changeName: (state, action: PayloadAction<string|null>) => {
            state.name = action.payload || state.name;
        },
        changeAvatar: (state, action: PayloadAction<string|null>) => {
            state.avatar = action.payload || state.avatar;
        },
    },
  });

  export const { changeName, changeAvatar } = userSlice.actions;
  export default userSlice.reducer;