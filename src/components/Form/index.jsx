import { useRef, cloneElement } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import TextArea from './TextArea';
import TextInput from './TextInput';
import Select from './Select';
import Field from './Field';
import { capitalize } from '@lib/utils';
import PhoneNumber from './PhoneNumber';
import PasswordInput from './PasswordInput';
import Toggle from './Toggle';
import SearchInput from './SearchInput';

const Form = ({ children, onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors }
  } = useForm({ defaultValues });

  const makeFieldError = ({
    fieldName,
    fieldLabel,
    minLength,
    maxLength,
    min,
    max,
    error
  }) => {
    const field = fieldLabel || fieldName;
    return (
      {
        required: error?.message || `${capitalize(field)} field is required.`,
        minLength:
          error?.message ||
          `The ${capitalize(
            field
          )} field must be at least ${minLength} characters long.`,
        maxLength:
          error?.message ||
          `The ${capitalize(
            field
          )} field must not exceed ${maxLength} characters in length.`,
        max: error?.message || `The ${field} field must not exceed ${max}.`,
        min: error?.message || `The ${field} field must be atleast ${min}.`,
        pattern: `The ${field} field must match the expected pattern.`
      }?.[error?.type] || 'Please enter a valid value.'
    );
  };

  const createSelectProps = (child, name) => {
    return {
      onChange: (option) => {
        setValue(name, option); // set value in form so that react-hook-form can validate
        clearErrors(name); // clear errors in react-hook-form
        child?.props?.onChange?.(option); // then call onChange on child
      }
    };
  };

  const injectProps = (child, key) => {
    const { rule, name, label } = child.props || {};

    const hasRule = Boolean(Object.keys(rule || {})?.length);

    if (!hasRule) return child;

    // Spread register only if rule has a value
    const rcfProps = { ...register(name, rule) };

    // Combine rcfProps, errorProps and other custom component specific props when cloning the element
    let mergedProps = { key: child?.key || key, ...rcfProps };

    // If errors exist, add error props
    const hasErrors = Boolean(errors?.[name]);
    if (hasErrors) {
      const errorProps = {
        error: makeFieldError({
          fieldName: name,
          fieldLabel: label,
          error: errors?.[name],
          ...rule
        })
      };
      mergedProps = { ...mergedProps, ...errorProps };
    }

    // Check if child is an instance of Select, if so, add other props
    if (child?.type?.InstanceOf === 'Select') {
      mergedProps = { ...mergedProps, ...createSelectProps(child, name) };
    }

    return cloneElement(child, mergedProps);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children?.map((child, idx) => injectProps(child, idx))}
    </form>
  );
};

Form.SearchInput = SearchInput;
Form.Toggle = Toggle;
Form.PasswordInput = PasswordInput;
Form.PhoneNumber = PhoneNumber;
Form.TextArea = TextArea;
Form.TextInput = TextInput;
Form.Select = Select;
Form.Field = Field;

Form.propTypes = {
  children: PropTypes.node
};

Form.InstanceOf = 'Form';

export default Form;
