import { createReducer } from "@reduxjs/toolkit";
import { REQUEST_GET_VILLA } from "./actions";
import { AxiosError } from "axios";

export type DashboardType = {
  pending: boolean;
  success: boolean;
  error: AxiosError | null;
  listVilla: [] | null;
};

const initialState: DashboardType = {
  pending: false,
  success: false,
  error: null,
  listVilla: [],
};
export const DASHBOARD_REDUCER = createReducer(initialState, (builder) => {
  builder

    .addCase(REQUEST_GET_VILLA.pending, (state) => {
      state.pending = true;
      state.success = false;
    })

    .addCase(REQUEST_GET_VILLA.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.success = true;
      state.listVilla = payload;
    })
    .addCase(REQUEST_GET_VILLA.rejected, (state, { payload }) => {
      state.error = payload as AxiosError;
    });
});
