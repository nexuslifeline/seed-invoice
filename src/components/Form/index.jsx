import { useRef, cloneElement } from 'react';
import TextArea from './TextArea';
import TextInput from './TextInput';
import Select from './Select';
import Field from './Field';
import PropTypes from 'prop-types';

const Form = ({ children, onSubmit }) => {
  const fieldsRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const el = fieldsRef.current;
    el.forEach(({ reset } = {}) => reset?.());
    el.forEach(({ validate } = {}) => validate?.());
    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      {children?.map((child, idx) => cloneElement(child, { ref: (el) => (fieldsRef.current[idx] = el), key: idx }))}
    </form>
  );
};

Form.TextArea = TextArea;
Form.TextInput = TextInput;
Form.Select = Select;
Form.Field = Field;

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;
