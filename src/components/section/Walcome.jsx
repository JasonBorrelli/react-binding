import { useState } from "react";




export function Walcome() {
    const [lingua, setLingua] = useState("Benvenuto");
    const setLinguaItaliano = () => setLingua("Benvenuto");
    const setLinguaFrancese = () => setLingua("Bienvenue");
    const setLinguaSpagnolo = () => setLingua("Bienvenido");
    return (
        <section>
            <div className="container d-flex justify-content-center align-items-center gap-3">Seleziona la lingua:
                <button onClick={setLinguaItaliano}
                    type="button"
                    className="btn btn-sm fw-bold shadow-sm"
                    style={{
                        background: 'linear-gradient(to right, #009246 0.00%, #009246 33.33%, #ffffff 33.33%, #ffffff 66.67%, #ce2b37 66.67%, #ce2b37 100.00%)',
                        color: '#1a1a1a',
                        border: '1px solid rgba(0,0,0,0.2)',
                        textShadow: '0 1px 1px rgba(255,255,255,0.7)'
                    }}
                >
                    Italiano
                </button>


                <button onClick={setLinguaFrancese}
                    type="button"
                    className="btn btn-sm fw-bold shadow-sm"
                    style={{
                        background: 'linear-gradient(to right, #0055a4 0.00%, #0055a4 33.33%, #ffffff 33.33%, #ffffff 66.67%, #ef4135 66.67%, #ef4135 100.00%)',
                        color: '#1a1a1a',
                        border: '1px solid rgba(0,0,0,0.2)',
                        textShadow: '0 1px 1px rgba(255,255,255,0.7)'
                    }}
                >
                    Francese
                </button>


                <button onClick={setLinguaSpagnolo}
                    type="button"
                    className="btn btn-sm fw-bold shadow-sm"
                    style={{
                        background: 'linear-gradient(to bottom, #aa151b 0.00%, #aa151b 33.33%, #f1bf00 33.33%, #f1bf00 66.67%, #aa151b 66.67%, #aa151b 100.00%)',
                        color: '#1a1a1a',
                        border: '1px solid rgba(0,0,0,0.2)',
                        textShadow: '0 1px 1px rgba(255,255,255,0.7)'
                    }}
                >
                    Spagnolo
                </button>
            </div><p className="display-1 text-success fw-bold text-center"> {lingua} </p>

        </section>
    )
}