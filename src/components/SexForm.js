import React, {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {useHistory} from "react-router-dom";

export const SexForm = () => {
    const {chooseFemale} = useContext(GlobalContext);
    const {patient} = useContext(GlobalContext);
    console.log(patient)

    const history = useHistory();

    if (!patient.firstName || !patient.lastName){
        history.push("/saisirNom");
    }

    const onSelect = e => {
        chooseFemale(e.target.value);
        history.push("/afficherPatient");
    }

    const retour = () => {
        history.push("/saisirNom");
    }

    return(
        <React.Fragment>
            <h3 className={"my-5 mx-auto text-center"}>Peux-tu indiquer son sexe?</h3>
            <div className={"container d-flex justify-content-center"}>
            <button type="button" className="btn btn-outline-primary mx-5 btn-lg" value={false} onClick={onSelect}>Homme</button>
            <button type="button" className="btn btn-outline-primary mx-5 btn-lg" value={true} onClick={onSelect}>Femme</button>
            </div>
            <button type="button" className="btn btn-danger mt-5-5 btn-sm" onClick={retour}>Retour</button>
        </React.Fragment>
    )
}