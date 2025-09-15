import '/src/styles/App.css'
import Modal from './Modal'
import ModalForm from './ModalForm'
function App()
{
  return (
    <Modal>
      {({ setOpen }) => <ModalForm setOpen={setOpen} />}
    </Modal>
  );
}

export default App;
