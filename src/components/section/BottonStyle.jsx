import { useState } from "react";


export function BottonStyle() {

    const [style, setStyle] = useState(true);

    function cambiaStile() {
        setStyle((prev) => !prev);
    }



    return (
        <section className="Container">
            <button className={style ? "btn btn-secondary text-uppercase bg-danger" : "btn btn-primary text-lowercase bg-success"} onClick={cambiaStile}>Cambia stile</button>

        </section>
    )
}   