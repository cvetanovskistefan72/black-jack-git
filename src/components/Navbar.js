import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (

            <nav className="nav-wrapper black lighten-1">
                <div className="  ">
                   <div className="container">
                   <a className="brand-logo left" href=""><i>Blackjack</i></a>
                  
                  
                        <ul className="  right">
                            <li><NavLink to="/">Game</NavLink></li>
                            <li><NavLink to="/rules">Rules</NavLink></li>
                           
                        </ul>
                   </div>
                   
                    </div>
                </nav>
        )
    }
}

export default Navbar;
