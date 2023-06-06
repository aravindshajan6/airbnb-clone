import React from 'react';
import './../assets/styles/card-comp.css';
// import swimmer from './../assets/images/image12.png';
// import soldout from './../assets/images/Group80.png';
// import online from './../assets/images/ONLINE.png';
import star from '../assets/images/Star1.png';

function CardComponent(props) {
  let badgeImg;
  if (props.item.openSpots === 0) badgeImg = 'SOLDOUT';
  if (props.item.location === 'Online') badgeImg = 'ONLINE';
  return (
    <div className='card-container'>
      {badgeImg && (
        <div alt='badge image' className='badge-img'>
          {badgeImg}
        </div>
      )}
      <img
        src={`../src/assets/images/${props.item.coverImg}`}
        alt='cover image'
        className='main-img'
      />

      <div className='card-stats'>
        <img src={star} alt=' star image' className='star-img' />
        <h3>
          {props.item.stats.rating}
          <span>
            ({props.item.stats.reviewCount}) {props.item.location}
          </span>
        </h3>
      </div>
      <p>
        {props.item.title}
        <br />{' '}
        <span>
          <strong>From ${props.item.price}</strong>
        </span>{' '}
        / person{' '}
      </p>
    </div>
  );
}

export default CardComponent;
