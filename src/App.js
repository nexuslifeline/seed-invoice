import TextInput from './components/Forms/TextInput';
import TextArea from './components/Forms/TextArea'
import Modal from './components/Forms/Modal'
import { useState } from 'react';

function App() {
  let [ isOpen, setIsOpen ] = useState(false)

  const onModalClose = () => {
    setIsOpen(false)
  }

  const ModalContent = () => (
    <div>
      <div style={{ margin: '0 0 20px 0'}}> this is sample content props fro modal</div>
      <div style={{ display: 'flex', justifyContent:'flex-end', alignItems:'center' }}>
        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button style={{ marginLeft: '8px' }}  onClick={() => setIsOpen(false)}>Cancel</button>
      </div>
    </div>
  )

  return (
    <div style={{ padding: '30px' }}>
      <TextInput label={'Full Name'} placeholder={'Enter Full Name'} />
      <TextArea label={'Address'} placeholder={'Enter Address'} />
      <Modal 
        isOpen={isOpen}
        title={'this is a modal title'}
        onClose={onModalClose}
        size={'xl'}
        content={<ModalContent/>}>
      </Modal>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </div>
  );
}

export default App;
