import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer from './cryptosreducer/cryptosreducer';
import CoinReducer from './singlecoin/coinreducer';

export default configureStore({
  reducer: {
    cryptolist: CryptoReducer,
    coin: CoinReducer,
  },
});
