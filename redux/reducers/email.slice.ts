import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IAuthState, IUserEmail } from "../types/email";

// Отправляем post запрос для регистрации
export const userEmail = createAsyncThunk<void, IUserEmail>(
  "user/email",
  async ({ email }, thunkApi) => {
    console.log(email);

    try {
      const { data } = await axios.get(
        "https://develop.sveves.com/api/confirm-email/" + email
      );

      return data.token;
    } catch ({ response }: any) {
      return thunkApi.rejectWithValue(response.data.message);
    }
  }
);

const initialState: IAuthState = {
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},

  // REGISTRATION USER
  extraReducers: (builder) => {
    builder.addCase(userEmail.pending, (state: any) => {
      state.isLoading = true;
    });

    builder.addCase(userEmail.fulfilled, (state: any, action) => {
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(userEmail.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
