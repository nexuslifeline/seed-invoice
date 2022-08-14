import TextInput from './components/Form/TextInput';
import TextArea from './components/Form/TextArea';
import Tab from './components/Tab';
import Modal from './components/Modal';
import Toggle from './components/Form/Toggle';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // const onModalClose = () => {
  //   setIsOpen(false);
  // };

  const ModalContent = () => (
    <div>
      <div style={{ margin: '0 0 20px 0'}}> this is sample content props for modal</div>
      <div style={{ display: 'flex', justifyContent:'flex-end', alignItems:'center' }}>
        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button style={{ marginLeft: '8px' }}  onClick={() => setIsOpen(false)}>Cancel</button>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '30px' }}>
      <Toggle label={`Yes, I am above 18y/o`} />
      <TextInput label={'Full Name'} placeholder={'Enter Full Name'} />
      <TextArea label={'Address'} placeholder={'Enter Address'} />
      <Tab>
        <Tab.Panel title={'Full time'}>
          <h1>{`Tab 1`}</h1>
        </Tab.Panel>
        <Tab.Panel title={'Part time'}>
          <h1>{`Tab 2`}</h1>
        </Tab.Panel>
      </Tab>
      <Modal
        isOpen={isOpen}
        title={'this is a modal title'}
        size={Modal.Sizes.LARGE}
        content={<ModalContent />}>
      </Modal>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </div>
  );
}

export default App;
