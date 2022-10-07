/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes, { Object } from 'prop-types';
import { Link } from 'react-router-dom';
import CryptoItem from './cryptoItemStructure';
import MyCoin from './coin/coin';

const CryptoItemList = (props) => {
  const { cryptos, search } = props;
  /* console.log(cryptos); */

  const filteredCryptos = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()) || crypto.symbol.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <h3 className="stats-header">STATS BY RANK</h3>
      <ul className="mysuperlist">
        { filteredCryptos.map((crypto) => (
          <Link to={`/coin/${crypto.id}`} element={<MyCoin />} key={crypto.id}>
            <CryptoItem crypto={crypto} />
          </Link>
        ))}
      </ul>
    </>
  );
};

CryptoItemList.propTypes = {
  cryptos: PropTypes.instanceOf(Object).isRequired,
};

export default CryptoItemList;
