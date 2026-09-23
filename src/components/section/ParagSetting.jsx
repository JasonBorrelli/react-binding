import { useState } from "react";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export function ParagSetting() {
    const [textAlignment, setTextAlignment] = useState("left");

    return (
        <section>
            <div>
                <button
                    type="button"
                    onClick={() => setTextAlignment("left")}
                    aria-label="Allinea a sinistra"
                >
                    <AlignLeft size={18} />
                </button>

                <button
                    type="button"
                    onClick={() => setTextAlignment("center")}
                    aria-label="Allinea al centro"
                >
                    <AlignCenter size={18} />
                </button>

                <button
                    type="button"
                    onClick={() => setTextAlignment("right")}
                    aria-label="Allinea a destra"
                >
                    <AlignRight size={18} />
                </button>
            </div>

            <p style={{ textAlign: textAlignment }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam rem voluptas magni officiis.
            </p>
        </section>
    );
}