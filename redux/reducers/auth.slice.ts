import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IAuthState, IUserRegistration } from "../types/auth";

// Отправляем post запрос для регистрации
export const userRegistration = createAsyncThunk<void, IUserRegistration>(
  "user/registration",
  async ({ email, password, repeated_password, first_name }, thunkApi) => {
    console.log({ email, password, repeated_password, first_name });

    try {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/signup",
        {
          email,
          password,
          repeated_password,
          first_name,
        }
      );
      console.log(data);

      // Сохраняем токен пользователя
      localStorage.setItem("token", JSON.stringify(data.token));

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
  name: "sign",
  initialState,
  reducers: {},

  // REGISTRATION USER
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state: any) => {
      state.isLoading = true;
    });

    builder.addCase(userRegistration.fulfilled, (state: any, action) => {
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(userRegistration.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
