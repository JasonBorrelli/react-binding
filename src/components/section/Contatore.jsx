import { useState } from "react";

export function Contatore() {

    const [contatore, setContatore] = useState(0);
    function aumenta() {
        setContatore(contatore + 1)
    }

    return (
        <>
            <p>Hai Cliccato {contatore} volte</p>
            <button className="btn btn-primary" onClick={aumenta}>Clicca qui</button>
        </>
    )
}
