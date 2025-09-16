
import '/src/styles/App.css';
import Modal from './Modal';
import ModalForm from './ModalForm';
import Success from './Success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/**
 * Hauptkomponente der Anwendung. Steuert die Routen und zeigt die passenden Seiten an.
 *
 * @returns {JSX.Element} Die App mit Routing
 */
function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Modal>
            {({ setOpen }) => <ModalForm setOpen={setOpen} />}
          </Modal>
        } />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
