import { configureStore, createSlice } from "@reduxjs/toolkit";

// For keeping track of the global state of the user's authentication
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

// For keeping track of the global state of all claims, to reduce the amount of times we call the backend API
const claimsSlice = createSlice({
  name: "claims",
  initialState: {
    claims: [],
  },
  reducers: {
    addClaim: (state, action) => {
      state.claims = state.claims.concat([action.payload]);
    },
    addMultipleClaims: (state, action) => {
      state.claims = state.claims.concat(action.payload);
    },
    removeClaim: (state, action) => {
      state.claims = state.claims.filter(
        (claim) => claim.id !== action.payload
      );
    },
  },
});

export const { addClaim, addMultipleClaims, removeClaim } = claimsSlice.actions;

// Store
const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    claims: claimsSlice.reducer,
  },
});

export default store;
