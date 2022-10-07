import React from 'react';
import PropTypes from 'prop-types';
import forward from '../images/forward.png';

const CryptoItem = (props) => {
  const { crypto } = props;

  const {
    id, rank, image, name, symbol, currentp,
  } = crypto;

  return (
    <li className="listItem">
      <div className="homeItem" id={id}>
        <div className="rank-and-arrow">
          <p className="rank">
            RANK #
            {rank}
          </p>
          <img src={forward} alt="forward" className="forwardIcon" />
        </div>
        <div className="home-item-info">
          <div className="homeItemImage">
            <img src={image} alt={name} className="myImage" />
          </div>
          <h3 className="name">
            {name}
            <br />
            <p className="symbol">
              {`(${symbol})`}
            </p>
          </h3>
          <p className="price">{`$${currentp.toLocaleString()}`}</p>
        </div>
      </div>
    </li>
  );
};

CryptoItem.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    currentp: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default CryptoItem;
