import TextInput from './components/Forms/TextInput';
import TextArea from './components/Forms/TextArea'

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <TextInput label={'Full Name'} placeholder={'Enter Full Name'} />
      <TextArea label={'Address'} placeholder={'Enter Address'} />
    </div>
  );
}

export default App;
