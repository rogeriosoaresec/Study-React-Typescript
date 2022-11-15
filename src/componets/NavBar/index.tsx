import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
export function NavBar() {

    return (
        <nav className="topnav">
            <Link to='/'>Home</Link>
            <Link to='Todo'>Todo</Link>
        </nav>
    )
}