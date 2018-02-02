import React from 'react';
import PropTypes from "prop-types";

const Card = () => {
    return (
        <div className="card">
            {
                this.props.people &&
                    <div className="people">
                        <div className="name">{ this.props.name }</div>
                        <div className="homeworldName">{ this.props.homeworldName }</div>
                        <div className="homeworldPop">{ this.props.homeworldPop }</div>
                        <div className="speciesType">{ this.props.speciesType }</div>
                    </div>
            }
                
            {
                this.props.planets &&
                    <div className="planet">
                        <div className="name">{ this.props.name }</div>
                        <div className="terrain">{ this.props.terrain }</div>
                        <div className="population">{ this.props.population }</div>
                        <div className="climate">{ this.props.climate }</div>
                        <div className="residents">{ this.props.residents }</div>
                    </div>
            }

            {
                this.props.vehicles &&
                    <div className="vehicle">
                        <div className="name">{ this.props.name }</div>
                        <div className="model">{ this.props.model }</div>
                        <div className="passengers">{ this.props.vehicleClass }</div>
                    </div>
            }
        </div>
    )
}

export default Card