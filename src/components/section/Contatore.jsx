import { useState } from "react";

export function Contatore() {

    const [contatore, setContatore] = useState(0);
    function aumenta() {
        setContatore(contatore + 1)
    }

    return (
        <section className="container-contatore ">
            <button className="btn btn-primary m-2 text-white" onClick={aumenta}>Clicca qui</button>
            <p className="m-2 d-flex align-center" >Hai Cliccato {contatore} volte</p>
        </section>
    )
}
