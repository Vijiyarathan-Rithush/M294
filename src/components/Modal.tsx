import { useState } from "react";
import type { ModalProperties } from "../models/ModalProperties";

function Modal({ children }: ModalProperties) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {!isOpen && (
                <button onClick={() => setOpen(true)} className="inline-flex h-11 min-w-[120px] items-center justify-center rounded-lg bg-blue-600 px-4 text-white shadow transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Registrieren</button>
            )}
            <div
                className="fixed inset-0 z-50 items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                style={{ display: isOpen ? 'flex' : 'none' }}
            >
                <div className="w-full max-w-[625px] md:max-w-[800px] rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/10">
                    {children({ setOpen })}
                </div>
            </div>
        </>
    );
}

export default Modal;