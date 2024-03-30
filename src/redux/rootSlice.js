import {createSlice} from '@reduxjs/toolkit'
const rootSlice = createSlice({
  name: "root",
  initialState: { loading: false, portfolioData: null },
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hideLoading: (state, action) => {
      state.loading = false;
    },
    heightLoading: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});
export default rootSlice;
export const { showLoading, hideLoading, heightLoading } = rootSlice.reducers;
