import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";


import { persistedAuthReducer } from "./auth/authSlice";
import { dealsSlice } from "./deals/dealsSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    deals: dealsSlice.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);