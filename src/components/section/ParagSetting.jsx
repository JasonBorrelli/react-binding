import { useState } from "react";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export function ParagSetting() {
    const [textAlignment, setTextAlignment] = useState("left");

    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-secondary border-2 border-black"
                    type="button"
                    onClick={() => setTextAlignment("left")}
                    aria-label="Allinea a sinistra"
                >
                    <AlignLeft size={22} color="white" />
                </button>

                <button className="btn btn-secondary border-2 border-black"
                    type="button"
                    onClick={() => setTextAlignment("center")}
                    aria-label="Allinea al centro"
                >
                    <AlignCenter size={22} color="white" />
                </button>

                <button className="btn btn-secondary border-2 border-black"
                    type="button"
                    onClick={() => setTextAlignment("right")}
                    aria-label="Allinea a destra"
                >
                    <AlignRight size={22} color="white" />
                </button>
            </div>

            <p style={{ textAlign: textAlignment }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam rem voluptas magni officiis.
            </p>
        </section>
    );
}