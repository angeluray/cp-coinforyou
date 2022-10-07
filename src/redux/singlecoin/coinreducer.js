import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSingleCrypto = createAsyncThunk(
  'cryptos/fetchSingleCryptoData',
  async (id) => {
    console.log(id);
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${Object.values(id)}`);
    const data = await response.json();
    /* const coindata = data.map((coin) => ({
      id: coin.id,
    })); */
    return data;
  },
);

const initialState = [];

export const SingleCryptoSlice = createSlice({
  name: 'single',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleCrypto.fulfilled]: (state, action) => action.payload,
  },
});

export default SingleCryptoSlice.reducer;
