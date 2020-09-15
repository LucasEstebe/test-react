import React from 'react'

export const LeftNav = () => {
    const leftNavStyle = {
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }

    return (
        <div className="bg-light border-right col-1" style={leftNavStyle}>
            <ul className="list-group list-group-flush pt-2">
                <li className="list-group-item list-group-item-action bg-light">Lien</li>
                <li className="list-group-item list-group-item-action bg-light">Lien</li>
                <li className="list-group-item list-group-item-action bg-light">Lien</li>
            </ul>
            <ul className="list-group list-group-flush pb-3">
                <li className="list-group-item list-group-item-action bg-light">Lien</li>
                <li className="list-group-item list-group-item-action bg-light">Lien</li>
            </ul>
        </div>
    );
}



