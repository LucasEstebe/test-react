import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Link} from "react-router-dom";

export const LeftNav = () => {
    return (
        <div className="bg-light border-right col-1" id="sidebar-wrapper">
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action bg-light">Dashboard</li>
                <li className="list-group-item list-group-item-action bg-light">Dashboard</li>
                <li className="list-group-item list-group-item-action bg-light">Dashboard</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action bg-light">Dashboard</li>
                <li className="list-group-item list-group-item-action bg-light">Dashboard</li>
            </ul>
        </div>
    );
}



