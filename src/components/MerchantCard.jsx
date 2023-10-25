import React from 'react';
import '../App.css';

const MerchantCard = ({ merchant: { live_status, name, rewards_rate, shop_background_img_base64, url } }) => {
  return (
    <a className='card' href={url} target="_blank" >
        <img src={shop_background_img_base64} alt={name} />
        {live_status === 'coming_soon' && <button>{live_status}</button>}
        <div className="p1">
          <p>{name}</p>
          <span>{rewards_rate} % minimum</span>
        </div>
    </a>
  );
};

export default MerchantCard;
