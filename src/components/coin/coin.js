import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleCrypto } from '../../redux/singlecoin/coinreducer';
import github from '../../images/github.png';
import reddit from '../../images/reddit.png';
import blockchain from '../../images/blockchain.png';
import website from '../../images/website.png';

const MyCoin = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singlecoin = useSelector((state) => state.coin);
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
      <div>
        <section className="coinHeader">
          <div className="devider">
            <h3 className="head-subtitle">Category:</h3>
            <p className="coinCategory">{singlecoin.categories[1] ? singlecoin.categories[1] : singlecoin.categories[0]}</p>
          </div>
          <div className="devider">
            <h3 className="head-subtitle">Rank:</h3>
            <p>{singlecoin.coingecko_rank}</p>
          </div>
          <div className="devider">
            <h3 className="head-subtitle">Market Price:</h3>
            <p>{singlecoin.market_data.current_price.usd}</p>
          </div>
          <div className="devider devider-img">
            <img src={singlecoin.image.small} alt="Crypto logo" className="coinImg" />
          </div>
        </section>
        <section className="coinBody">
          <h3 className="coinBodyTitle">Price changes per time</h3>
          <div className="coinPrices">
            <div className="change">
              <h3>24h:</h3>
              <p className="coinprice">{`%${singlecoin.market_data.price_change_percentage_24h}`}</p>
            </div>
            <div className="change">
              <h3>30d:</h3>
              <p className="coinprice">{`%${singlecoin.market_data.price_change_percentage_30d}`}</p>
            </div>
            <div className="change">
              <h3>1h:</h3>
              <p className="coinprice">{`%${singlecoin.market_data.price_change_percentage_1h_in_currency.usd}`}</p>
            </div>
          </div>
          <div className="coinSupplies">
            <div className="supply">
              <h3>Total supply:</h3>
              <p>{singlecoin.market_data.total_supply}</p>
            </div>
            <div className="supply max-supply">
              <h3>Max supply:</h3>
              <p>{singlecoin.market_data.max_supply || 'Not max supply data'}</p>
            </div>
            <div className="supply">
              <h3>Circulating supply:</h3>
              <p>{singlecoin.market_data.circulating_supply}</p>
            </div>
          </div>
          <div className="coinSocial">
            <a href={singlecoin.links.homepage[0]}><img src={website} alt="website logo" className="socialIcon" /></a>
            <a href={singlecoin.links.blockchain_site[0]}><img src={blockchain} alt="blockchain logo" className="socialIcon" /></a>
            <a href={singlecoin.links.subreddit_url}><img src={reddit} alt="reddit logo" className="socialIcon" /></a>
            <a href={singlecoin.links.repos_url.github[0]}><img src={github} alt="github logo" className="socialIcon" /></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyCoin;
