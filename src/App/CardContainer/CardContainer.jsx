import React from 'react';
import Card from '../Card/Card';

const CardContainer = (props) => {
  return (
    <div className="card">
      {
        props.fetch.map( (data, index) => <Card key={index} data={data} /> )
      }
    </div>
  );
}

export default CardContainer