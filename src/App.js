import TextInput from 'components/Form/TextInput';
import TextArea from 'components/Form/TextArea';
import Tab from 'components/Tab';
import Modal from 'components/Modal';
import Toggle from 'components/Form/Toggle';
import Button from 'components/Button';
import { useState } from 'react';
import PasswordInput from 'components/Form/PasswordInput';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handMoreActionClick = (e, button) => {
    alert(button);
  };

  const [moreActions, setMoreActions] = useState([
    {
      label: 'Action1',
      onClick: (e) => {
        handMoreActionClick(e, 'action 1');
      },
    },
    {
      label: 'Action2',
      onClick: (e) => {
        handMoreActionClick(e, 'action 2');
      },
    },
    {
      label: 'Action3',
      onClick: (e) => {
        handMoreActionClick(e, 'action 3');
      },
    },
    {
      label: 'Action4',
      onClick: (e) => {
        handMoreActionClick(e, 'action 4');
      },
    },
  ]);

  const [password, setPassword] = useState('');

  const buttonContainerStyle = {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const ModalContent = () => (
    <div>
      <div style={{ margin: '0 0 20px 0' }}> this is sample content props for modal</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button style={{ marginLeft: '8px' }} onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );

  const handleButtonClick = (e, desc) => {
    console.log(e.target);
    alert(desc);
  };

  return (
    <div style={{ padding: '30px' }}>
      <Toggle label={'Yes, I am above 18y/o'} />
      <TextInput label={'Full Name'} placeholder={'Enter Full Name'} />
      <TextArea label={'Address'} placeholder={'Enter Address'} />
      <Tab>
        <Tab.Panel title={'Full time'}>
          <h1>{'Tab 1'}</h1>
        </Tab.Panel>
        <Tab.Panel title={'Part time'}>
          <h1>{'Tab 2'}</h1>
        </Tab.Panel>
      </Tab>
      <Modal
        isOpen={isOpen}
        title={'this is a modal title'}
        size={Modal.Sizes.LARGE}
        content={<ModalContent />}></Modal>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'primary sm button')}
          label={'Im a primary sm Button'}
          size={Button.Sizes.SMALL}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'primary sm button')}
          label={'Im a primary sm Button'}
          size={Button.Sizes.SMALL}
        />
        <Button onClick={(e) => handleButtonClick(e, 'primary md button')} label={'Im a primary md Button'} />
        <Button
          onClick={(e) => handleButtonClick(e, 'primary lg button')}
          label={'Im a primary lg Button'}
          size={Button.Sizes.LARGE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'primary md button')}
          label={'Im a primary md disabled Button'}
          disabled
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary sm button')}
          label={'Im a secondary sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.SECONDARY}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary sm button')}
          label={'Im a secondary sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.SECONDARY}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary md button')}
          label={'Im a secondary md Button'}
          variant={Button.Variants.SECONDARY}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary lg button')}
          label={'Im a secondary lg Button'}
          size={Button.Sizes.LARGE}
          variant={Button.Variants.SECONDARY}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary md button')}
          label={'Im a secondary md disabled Button'}
          variant={Button.Variants.SECONDARY}
          disabled
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'danger sm button')}
          label={'Im a danger sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.DANGER}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'danger sm button')}
          label={'Im a danger sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.DANGER}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'danger md button')}
          label={'Im a danger md Button'}
          variant={Button.Variants.DANGER}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'danger lg button')}
          label={'Im a danger lg Button'}
          size={Button.Sizes.LARGE}
          variant={Button.Variants.DANGER}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'danger md button')}
          label={'Im a danger md disabled Button'}
          variant={Button.Variants.DANGER}
          disabled
        />
      </div>
      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'success md button')}
          label={'Im a success md Button'}
          variant={Button.Variants.SUCCESS}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'success sm button')}
          label={'Im a success sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.SUCCESS}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success md button')}
          label={'Im a success md Button'}
          variant={Button.Variants.SUCCESS}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success lg button')}
          label={'Im a success lg Button'}
          size={Button.Sizes.LARGE}
          variant={Button.Variants.SUCCESS}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success md button')}
          label={'Im a success md disabled Button'}
          variant={Button.Variants.SUCCESS}
          disabled
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'primary sm outline button')}
          label={'Im a primary outline sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.PRIMARY_OUTLINE}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'primary sm  outline button')}
          label={'Im a primaryoutline  sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.PRIMARY_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'primary md outline button')}
          label={'Im a primary outline md Button'}
          variant={Button.Variants.PRIMARY_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'primary lg outline button')}
          label={'Im a primary outline lg Button'}
          size={Button.Sizes.LARGE}
          variant={Button.Variants.PRIMARY_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'primary md outline button')}
          label={'Im a primary outline md disabled Button'}
          disabled
          variant={Button.Variants.PRIMARY_OUTLINE}
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary sm outline button')}
          label={'Im a secondary outline sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.SECONDARY_OUTLINE}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary sm  outline button')}
          label={'Im a secondary outline  sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.SECONDARY_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary md outline button')}
          label={'Im a secondary outline md Button'}
          variant={Button.Variants.SECONDARY_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary lg outline button')}
          label={'Im a secondary outline lg Button'}
          size={Button.Sizes.LARGE}
          variant={Button.Variants.SECONDARY_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary md outline button')}
          label={'Im a secondary outline md disabled Button'}
          disabled
          variant={Button.Variants.SECONDARY_OUTLINE}
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'danger sm outline button')}
          label={'Im a danger outline sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.DANGER_OUTLINE}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'danger sm  outline button')}
          label={'Im a danger outline  sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.DANGER_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'danger md outline button')}
          label={'Im a danger outline md Button'}
          variant={Button.Variants.DANGER_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'danger lg outline button')}
          label={'Im a danger outline lg Button'}
          size={Button.Sizes.LARGE}
          variant={Button.Variants.DANGER_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'danger md outline button')}
          label={'Im a danger outline md disabled Button'}
          disabled
          variant={Button.Variants.DANGER_OUTLINE}
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'success sm outline button')}
          label={'Im a success outline sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.SUCCESS_OUTLINE}>
          <span>children content</span>
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e, 'success sm  outline button')}
          label={'Im a success outline  sm Button'}
          size={Button.Sizes.SMALL}
          variant={Button.Variants.SUCCESS_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success md outline button')}
          label={'Im a success outline md Button'}
          variant={Button.Variants.SUCCESS_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success lg outline button')}
          label={'Im a success outline lg Button'}
          size={Button.Sizes.LARGE}
          variant={Button.Variants.SUCCESS_OUTLINE}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success md outline button')}
          label={'Im a success outline md disabled Button'}
          disabled
          variant={Button.Variants.SUCCESS_OUTLINE}
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'primary pill sm button')}
          label={'Im a primary pill sm Button'}
          size={Button.Sizes.SMALL}
          pill
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'secondary pill sm button')}
          label={'Im a secondary pill sm Button'}
          size={Button.Sizes.SMALL}
          pill
          variant={Button.Variants.SECONDARY}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'danger pill sm button')}
          label={'Im a danger pill sm Button'}
          size={Button.Sizes.SMALL}
          pill
          variant={Button.Variants.DANGER}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success pill sm button')}
          label={'Im a success pill sm Button'}
          size={Button.Sizes.SMALL}
          pill
          variant={Button.Variants.SUCCESS}
        />
        <Button
          onClick={(e) => handleButtonClick(e, 'success pill sm button')}
          label={'Im a success pill sm Button'}
          size={Button.Sizes.SMALL}
          pill
          variant={Button.Variants.PRIMARY_OUTLINE}
        />
      </div>

      <div style={buttonContainerStyle}>
        <Button onClick={(e) => handleButtonClick(e, 'block button')} label={'Im a block button'} block />
      </div>

      <div style={buttonContainerStyle}>
        <Button
          onClick={(e) => handleButtonClick(e, 'block button')}
          label={'More Actions'}
          moreActions={moreActions}
        />

        <Button
          onClick={(e) => handleButtonClick(e, 'block button')}
          label={'More Actions'}
          moreActions={moreActions}
          size='sm'
        />

        <Button
          onClick={(e) => handleButtonClick(e, 'block button')}
          label={'More Actions'}
          moreActions={moreActions}
          size='lg'
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <PasswordInput
          label={'Password'}
          placeholder={'Enter your password.'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showStrength
        />

        <ul>
          <li>Strong: 1 Uppercase, 1 Lowercase, 1 digit, 1 special char, 8 char</li>
          <li>Medium: atleast 6 char, no digit || no upper || no lowercase || no special char</li>
          <li>Weak: not strong and not medium</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
