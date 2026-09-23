import { useState } from "react";


export function BottonStyle() {

    const [style, setStyle] = useState(true);

    function cambiaStile() {
        setStyle((prev) => !prev);
    }



    return (
        <section className="container d-flex justify-content-center align-items-center gap-3">
            <button className={style ? "btn btn-secondary text-uppercase bg-danger" : "btn btn-primary text-lowercase bg-success"} onClick={cambiaStile}>Cambia stile</button>

        </section>
    )
}   