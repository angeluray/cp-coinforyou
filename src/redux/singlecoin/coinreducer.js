import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSingleCrypto = createAsyncThunk(
  'cryptos/fetchSingleCryptoData',
  async (id) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${Object.values(id)}`);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  message: true,
};

export const SingleCryptoSlice = createSlice({
  name: 'single',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleCrypto.pending]: () => initialState,
    [fetchSingleCrypto.fulfilled]: (state, action) => action.payload,
  },
});

export default SingleCryptoSlice.reducer;
export { initialState };
