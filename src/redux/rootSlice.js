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
    setportfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});
export default rootSlice.reducer;
export const { showLoading, hideLoading, setportfolioData } = rootSlice.actions;
