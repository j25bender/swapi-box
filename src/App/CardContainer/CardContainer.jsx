import React from 'react';
import Card from '../Card/Card';

const CardContainer = (props) => {
    console.log(props)
  return (
    <div className="cards">
      {
        props.cards.map( (data, index) => <Card key={index} data={data} /> )
      }
    </div>
  );
}

export default CardContainer