import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const DASHBOARD_SELECTOR = (state: RootState) => state.dashboard;

export const MHA_SELECTOR_COLLECTION = createSelector(
  DASHBOARD_SELECTOR,
  (state) => state,
  {
    devModeChecks: { identityFunctionCheck: "never" },
  }
);
