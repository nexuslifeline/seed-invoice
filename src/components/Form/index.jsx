import TextArea from './TextArea';
import TextInput from './TextInput';
import PropTypes from 'prop-types';

const Form = ({ children }) => <form>{children}</form>;

Form.TextArea = TextArea;
Form.TextInput = TextInput;

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
