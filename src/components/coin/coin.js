/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCrypto } from '../../redux/singlecoin/coinreducer';
/* import github from '../../images/github.png';
import reddit from '../../images/reddit.png';
import blockchain from '../../images/blockchain.png';
import website from '../../images/website.png'; */

const MyCoin = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singlecoin = useSelector((state) => state.coin);
  console.log(singlecoin);
  console.log(params);
  /* console.log(myparams); */
  /* console.log(myparams); */
  /* console.log(myparams[0]); */

  useEffect(() => {
    dispatch(fetchSingleCrypto(params));
  }, []);

  return (
    <div className="myCoinContainer">
      <div className="coinTitle">
        <h2>{singlecoin.name}</h2>
        <p>{singlecoin.symbol}</p>
      </div>
    </div>
  );
};

export default MyCoin;
