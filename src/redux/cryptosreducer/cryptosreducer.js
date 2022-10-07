import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fullURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h';

export const fetchCryptoList = createAsyncThunk(
  'cryptos/fetchCryptoData',
  async () => {
    const response = await fetch(fullURL);
    const data = await response.json();
    /* console.log(data); */
    const cryptoData = data.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      image: crypto.image,
      symbol: crypto.symbol,
      currentp: crypto.current_price,
      rank: crypto.market_cap_rank,
      highprice: crypto.high_24h,
      lowprice: crypto.low_24h,
      circulating: crypto.circulating_supply,
      total: crypto.total_supply,
      max: crypto.max_supply,
      pricechange: crypto.price_change_percentage_1h_in_currency,
      pricechange24: crypto.price_change_24h,
    }));
    /* console.log(cryptoData); */
    return cryptoData;
  },
);

const initialState = [];

export const CryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCryptoList.fulfilled]: (state, action) => action.payload,
  },
});

export default CryptoSlice.reducer;
