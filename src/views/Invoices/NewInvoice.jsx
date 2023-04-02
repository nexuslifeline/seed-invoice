import Breadcrumb from 'components/Breadcrumb';
import Card from 'components/Card';
import ContentView from 'components/ContentView';
import TextInput from 'components/Form/TextInput';
import TextArea from 'components/Form/TextArea';
import InputContainer from 'components/Form/InputContainer';
import InputGroup from 'components/Form/InputGroup';
import Form from 'components/Form';

export const NewInvoice = () => {
  return (
    <ContentView>
      {' '}
      <Breadcrumb
        title={'New Invoice'}
        items={[
          { text: 'Workspace', to: '/dashboard' },
          { text: 'Invoices', to: '/invoices' },
        ]}
      />
      <Card header={'Invoice'} maxWidth={800}>
        <Form>
          <Form.Field label='Customer'>
            <Form.Select />
          </Form.Field>
        </Form>

        <InputGroup>
          <InputContainer>
            <TextInput label='Date' />
          </InputContainer>
          <InputContainer>
            <TextInput label='Due Date' />
          </InputContainer>
        </InputGroup>
        <InputContainer>
          <TextArea />
        </InputContainer>
      </Card>
    </ContentView>
  );
};

export default NewInvoice;
