import Modal from "./Modal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  useEffect(() => {
    // Modal direkt öffnen
    document.querySelector("button")?.click();
  }, []);
  return (
    <Modal>
      {() => (
        <div className="flex flex-col items-center justify-center h-full p-8">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Erfolg!</h1>
          <p className="text-lg text-black">Die Registrierung war erfolgreich.</p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => navigate("/")}>Zurück zur Hauptseite</button>
        </div>
      )}
    </Modal>
  );
}
