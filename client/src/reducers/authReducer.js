import { createSlice } from "@reduxjs/toolkit";
import LoginService from "../services/login";
import { displayMessage } from "./notificationReducer";
import ProgramServices from "../services/program";

const authSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const attemptLogin = (username, password) => async (dispatch) => {
  try {
    const user = await LoginService.login({ username, password });
    dispatch(setUser(user));

    // save the user to local storage
    window.localStorage.setItem("user", JSON.stringify(user));
    // display a success message
    dispatch(displayMessage(`Welcome ${user.username}`, "success", 5));
  } catch (err) {
    // display an error message
    dispatch(displayMessage("Invalid username or password", "error", 5));
  }
};

export const logout = () => async (dispatch) => {
  // remove the user from local storage
  window.localStorage.removeItem("user");
  dispatch(setUser(null));
};

export const initializeUser = () => async (dispatch) => {
  const loggedUserJSON = window.localStorage.getItem("user");
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    dispatch(setUser(user));
    ProgramServices.setToken(user.token);
  }
};

export default authSlice.reducer;
