import TextInput from './components/Forms/TextInput';
import TextArea from './components/Forms/TextArea';
import Tab from './components/Tab';
import './shared/styles/global.scss';

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <TextInput label={'Full Name'} />
      <TextArea label={'Address'} />
      <Tab>
        <Tab.Panel title={'Full time'}>
          <h1>{`Tab 1`}</h1>
        </Tab.Panel>
        <Tab.Panel title={'Part time'}>
          <h1>{`Tab 2`}</h1>
        </Tab.Panel>
      </Tab>
    </div>
  );
}

export default App;
