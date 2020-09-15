import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Link} from "react-router-dom";

export const TopNav = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            {/* Logo */}
            <Link className="navbar-brand" to={"/"}>
                <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                     width="30" height="30" className="d-inline-block align-top mr-2" alt="Placeholder Logo"/>
                    Placeholder Logo
            </Link>
            {/* /Logo */}

            <ul className={"navbar-nav"}>
                <li>
                    <Link to={"/"}
                          className="nav-link dropdown-toggle"
                          id="navbarDropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false"> Mon Compte</Link>
                    {/* Dropdown menu */}
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Lien</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}