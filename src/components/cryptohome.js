import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoList } from '../redux/cryptosreducer/cryptosreducer';
import CryptoItemList from './cryptoList';

const MyCryptoCurrencies = () => {
  const cryptos = useSelector((state) => state.cryptolist);
  /* console.log(cryptos); */
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCryptoList());
  }, []);

  return (
    <div className="cryptoContainer">
      <input type="text" placeholder="Search a cryptocurrency" onChange={(e) => setSearch(e.target.value)} className="form" />
      <CryptoItemList cryptos={cryptos} search={search} />
    </div>
  );
};

export default MyCryptoCurrencies;
