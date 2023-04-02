import TextArea from './TextArea';
import TextInput from './TextInput';
import Select from './Select';
import Field from './Field';
import PropTypes from 'prop-types';

const Form = ({ children }) => <form>{children}</form>;

Form.TextArea = TextArea;
Form.TextInput = TextInput;
Form.Select = Select;
Form.Field = Field;

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
