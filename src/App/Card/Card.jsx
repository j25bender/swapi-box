import React from 'react';
import './Card.css'
import FadeIn from 'react-fade-in'
import img from '../../images/star-wars-icon.png'

const Card = (props) => {
    if(props.data) {
        const renderCards = Object.entries(props.data.info).map( (entry, index) => {
            return props.data.favorite ? 
            <h6 className="selected" key={index}><img src={img} />{entry[0]}:  <span>{entry[1]}</span></h6> :
                                         <h6 key={index}>{entry[0]}:  <span>{entry[1]}</span></h6>
        })
        
        return (
            <FadeIn>
                <div className="card" onClick={ () => props.selectCard(props.data)}>{ renderCards }</div>
            </FadeIn>
        )
    }
}

export default Card