import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { DASHBOARD_REDUCER } from "./dashboard/reducers";

export const store = configureStore({
  reducer: {
    dashboard: DASHBOARD_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
