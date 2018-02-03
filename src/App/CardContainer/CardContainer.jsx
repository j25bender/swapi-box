import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = (props) => {
  return (
    <div className="cardContainer">
      {
        props.fetch.map( (data, index) => <Card key={index} data={data} /> )
      }
    </div>
  );
}

export default CardContainer