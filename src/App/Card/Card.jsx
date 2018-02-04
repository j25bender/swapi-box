import React from 'react';
import './Card.css'

const Card = (props) => {
    if(props.data) {
        const renderCards = Object.entries(props.data.info).map( (entry, index) => {
            return props.data.favorite ? <h6 className="selected" key={index}>{entry[0]}:  <span>{entry[1]}</span></h6> :
                                         <h6 key={index}>{entry[0]}:  <span>{entry[1]}</span></h6>
        })
        
        return (
            <div className="card" onClick={ () => props.selectCard(props.data)}>{ renderCards }</div>
        )
    }
}

export default Card