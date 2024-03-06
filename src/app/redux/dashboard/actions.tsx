import { API } from "@/app/config/api.collection";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const REQUEST_GET_VILLA = createAsyncThunk(
  "mental-health-audit/get-latest-projects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API.DASHBOARD.GET_ALL_VILLA);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
