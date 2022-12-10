import { Link } from "react-router-dom";
import React from '../../assets/react.svg'
import './nav.css'

function Nav() {
    return (
        <nav>
            <div className="nav-logo">
                <Link to="/">
                    <img src={React}></img>
                </Link>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to='/materias'>Materias</Link></li>
                    <li><Link to='/estudiantes'>Estudiantes</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
