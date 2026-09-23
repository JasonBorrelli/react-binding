import React, { useState } from 'react';

// Dati iniziali della lista di attività
const INITIAL_ITEMS = [
    { id: 1, text: "Implementa un contatore numerico incrementabile via bottone e aggiungi un pulsante dedicato per azzerare istantaneamente il valore", completed: false },
    { id: 2, text: "Crea un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click, mutandone dinamicamente l'aspetto grafico", completed: true },
    { id: 3, text: "Creare un componente con tre pulsanti ed un paragrafo. Creare una variabile di stato reattiva per gestire l’allineamento del paragrafo. Per ogni pulsante, impostare l’evento onClick e impostare l’allineamento in base al pulsante cliccato", completed: false },
    { id: 4, text: "Visualizza un messaggio di benvenuto che si aggiorni in tempo reale scegliendo tra diverse lingue tramite una serie di bottoni dedicati", completed: false },
    { id: 5, text: "Genera una lista di attività permettendo di segnare ogni elemento come completato applicando una classe con stile testuale barrato quando clicchiamo sull'elemento in questione.", completed: true },
];

export function CheckList() {
    const [items, setItems] = useState(INITIAL_ITEMS);

    // Inverte lo stato di completamento dell'elemento cliccato
    const toggleItem = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    // Resetta tutti gli elementi a non completati
    const resetAll = () => {
        setItems((prevItems) => prevItems.map((item) => ({ ...item, completed: false })));
    };

    const completedCount = items.filter((item) => item.completed).length;

    return (
        <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center p-3">
            {/* Inclusione stili Bootstrap e Bootstrap Icons via CDN */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
            />

            { }
            <div className="card shadow-sm border-0 w-100" style={{ maxWidth: '480px' }}>
                <div className="card-header bg-white border-bottom py-3 px-4">
                    <h1 className="h5 fw-bold text-dark mb-1">Lista Attività</h1>
                    <p className="text-muted small mb-0">
                        Clicca su una riga per sbarrare l'attività completata.
                    </p>
                </div>


                <div className="list-group list-group-flush">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            className={`list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-bottom ${item.completed ? 'bg-light' : 'bg-white'
                                }`}
                            style={{ cursor: 'pointer' }}
                        >

                            <input
                                type="checkbox"
                                className="form-check-input me-3 mt-0 flex-shrink-0"
                                checked={item.completed}
                                readOnly
                                style={{ cursor: 'pointer', transform: 'scale(1.15)' }}
                            />


                            <span
                                className={`flex-grow-1 user-select-none ${item.completed
                                    ? 'text-decoration-line-through text-muted fst-italic'
                                    : 'text-dark fw-medium'
                                    }`}
                            >
                                {item.text}
                            </span>
                            {item.completed && (
                                <i className="bi bi-check2 text-success fw-bold ms-2 fs-5"></i>
                            )}
                        </button>
                    ))}
                </div>

                { }
                <div className="card-footer bg-white border-top py-3 px-4 d-flex justify-content-between align-items-center text-muted small">
                    <span>
                        <strong>{completedCount}</strong> su <strong>{items.length}</strong> completate
                    </span>
                    <button
                        type="button"
                        onClick={resetAll}
                        className="btn btn-sm btn-outline-secondary"
                    >
                        Azzera
                    </button>
                </div>
            </div>
        </div>
    );
}