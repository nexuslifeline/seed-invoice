import Breadcrumb from '@components/Breadcrumb';
import Card from '@components/Card';
import ContentView from '@components/ContentView';
import TextInput from '@components/Form/TextInput';
import TextArea from '@components/Form/TextArea';
import InputContainer from '@components/Form/InputContainer';
import InputGroup from '@components/Form/InputGroup';
import Form from '@components/Form';
import Button from '@components/Button';

export const NewInvoice = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
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
          <Form.Field label='Customer' rules={[{ required: true }]}>
            <Form.Select name='customer' options={options} />
          </Form.Field>
          <Form.Field label='Date' rules={[{ required: true }]}>
            <Form.TextInput name='date' label='Date' />
          </Form.Field>
          <Button type='submit'>Test Submit</Button>
        </Form>

        <InputGroup>
          <InputContainer></InputContainer>
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
