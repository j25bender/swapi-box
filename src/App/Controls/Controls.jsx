import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Nav.css'

const Nav = () => {
    return (<div className="navLinks">
                    <NavLink to="/people">People</NavLink>
                    <NavLink to="/planet">Planet</NavLink>
                    <NavLink to="/vehicle">Vehicle</NavLink>
                    <NavLink to="/favorite">Favorite</NavLink>
            </div>
    )
}

export default Nav