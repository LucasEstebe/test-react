import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {useHistory} from "react-router-dom";

export const Patient = () => {
    const {patient} = useContext(GlobalContext);

    const history = useHistory()

    if (!patient.firstName || !patient.lastName){
        history.push("/saisirNom");
    }

    console.log(patient);
    return (
    <div className="card text-center">
        <div className="card-body">
            <h5 className="card-title">{patient.isFemale ? "Madame" : "Monsieur"} {patient.firstName} {patient.lastName}</h5>
        </div>
    </div>
    )
}