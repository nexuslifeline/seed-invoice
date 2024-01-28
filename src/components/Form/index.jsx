import { useRef, cloneElement } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import TextArea from './TextArea';
import TextInput from './TextInput';
import Select from './Select';
import Field from './Field';
import { capitalize } from '@lib/utils';

const Form = ({ children, onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues });

  const makeFieldError = ({
    fieldName,
    minLength,
    maxLength,
    min,
    max,
    error
  }) => {
    return (
      {
        required:
          error?.message || `${capitalize(fieldName)} field is required.`,
        minLength:
          error?.message ||
          `The ${capitalize(
            fieldName
          )} field must be at least ${minLength} characters long.`,
        maxLength:
          error?.message ||
          `The ${capitalize(
            fieldName
          )} field must not exceed ${maxLength} characters in length.`,
        max: error?.message || `The ${fieldName} field must not exceed ${max}.`,
        min: error?.message || `The ${fieldName} field must be atleast ${min}.`,
        pattern: `The ${fieldName} field must match the expected pattern.`
      }?.[error?.type] || 'There was an error in this field.'
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children?.map((child, idx) => {
        const { rule, name } = child.props || {};
        // Spread register only if rule has a value
        const registerProps = rule ? { ...register(name, rule) } : {};
        const errorProps = errors[name]
          ? {
              error: makeFieldError({
                fieldName: name,
                error: errors[name],
                ...rule
              })
            }
          : {};

        // Combine registerProps and errorProps when cloning the element
        return cloneElement(child, {
          ...registerProps,
          ...errorProps,
          key: child?.key || idx
        });
      })}
    </form>
  );
};

Form.TextArea = TextArea;
Form.TextInput = TextInput;
Form.Select = Select;
Form.Field = Field;

Form.propTypes = {
  children: PropTypes.node
};

export default Form;
