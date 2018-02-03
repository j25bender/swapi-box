import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Nav.css'

const Nav = () => {
    return (<div className="navLinks">
                    <NavLink to="/people">People</NavLink>
                    <NavLink to="/planet">Planets</NavLink>
                    <NavLink to="/vehicle">Vehicles</NavLink>
                    <NavLink to="/favorite">Favorites</NavLink>
            </div>
    )
}

export default Nav