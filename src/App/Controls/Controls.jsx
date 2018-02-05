import React from 'react'
import { NavLink } from 'react-router-dom'
import './Controls.css'

const Nav = (props) => {
    return (
        <div>
            <h1>SWAPI BOX</h1>
                <div className="navLinks">
                        <div className="link"><NavLink to="/people">People</NavLink></div>
                        <div className="link"><NavLink to="/planet">Planets</NavLink></div>
                        <div className="link"><NavLink to="/vehicle">Vehicles</NavLink></div>
                        <div className="favLink"><NavLink to="/favorite">Favorites</NavLink>
                        <h3 className="favCount">{props.favs}</h3>
                        </div>
                </div>
        </div>
    )
}

export default Nav