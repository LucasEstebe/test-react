import React, {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const NameForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const {inputFirstName} = useContext(GlobalContext);
    const {inputLastName} = useContext(GlobalContext);


    const onSumbit = e => {
        e.preventDefault();
        inputFirstName(firstName);
        inputLastName(lastName);
    }

    return(
        <React.Fragment>
            <h3 className={"my-5 mx-auto text-center"}>Peux-tu indiquer l'identité du patient?</h3>
            <form className={"form-inline mx-auto my-5 row"} onSubmit={onSumbit}>
                <div className="form-group mx-auto col-6">
                    <input type="text"
                           className={"form-control mx-auto w-75"}
                           value={lastName}
                           onChange={(e)=>{setLastName(e.target.value)}}
                           placeholder="Nom"
                    />
                </div>
                <div className="form-group mx-auto col-6">
                    <input type="text"
                           className={"form-control mx-auto w-75"}
                           value={firstName}
                           onChange={(e)=>{setFirstName(e.target.value)}}
                           placeholder="Prénom"
                    />
                </div>
                <input type={"submit"} className="btn btn-success col-4 mx-auto my-5" value={"Valider"}/>
            </form>
        </React.Fragment>
    )
}