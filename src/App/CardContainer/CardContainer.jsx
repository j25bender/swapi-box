import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'
import FadeIn from 'react-fade-in'

const CardContainer = (props) => {
  const emptyCards = props.fetch.length ? null : <h6>Go Favorite Some Cards, Yo</h6>
  return (
    <FadeIn>
    <div className="cardContainer">

        { emptyCards }
      {
        props.fetch.map( (data, index) => <Card key={index} data={data} selectCard={props.selectCard} /> )
      }
    </div>
    </FadeIn>
  );
}

export default CardContainer