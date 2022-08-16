import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Styles from './PasswordInput.module.scss'
import classNames from 'classnames'
import debounce from 'lodash/debounce'

const passwordStrengthClasses = {
  strong: Styles.strong,
  medium: Styles.medium,
  weak: Styles.weak
};

const passwordStrengths = {
  STRONG: 'strong',
  MEDIUM: 'medium',
  WEAK: 'weak'
};

const noCapital = '(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,})|(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{6,})'
const noDigit = '((?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{8,}))|(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{6,})'
const minSix = '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{6,}))'
const noSpecialChar = '((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))|(?=.*[a-z])(?=.*[A-Z])(?=.{6,})'

//a-z = has 1 lowercase | A-Z = has 1 uppercase | 0-9 = has 1 digit | ^a-zA-Z0-9 = has 1 special char | {8,} = atleast 8 char
const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,})');

//medium strength if 6 char or below length or no digit, or no capital char
const mediumPassword = new RegExp(`${minSix}|${noDigit}|${noCapital}|${noSpecialChar}`);

const PasswordInput = ({ label, containerClassName, ...props }) => {

  const debouceCheckPassword = useCallback(debounce(value => checkPassword(value), 500), []);
  const [passwordStrength, setPasswordStrength] = useState('')

  const checkPassword = (value) => {

    if(!value) {
      setPasswordStrength('');
    }

    if(strongPassword.test(value)) {
      setPasswordStrength(PasswordInput.PasswordStrengths.STRONG);
    }
    else if(mediumPassword.test(value)){
      setPasswordStrength(PasswordInput.PasswordStrengths.MEDIUM)
    }
    else {
      setPasswordStrength(PasswordInput.PasswordStrengths.WEAK)
    }

  };

  useEffect(() => {
    if(props?.value)
    debouceCheckPassword(props?.value);
  }, [debouceCheckPassword, props.value])



  return (
    <div className={classNames(Styles.container, containerClassName)}>
      <input type='password' className={Styles.input} {...props} />
      <label className={Styles.label}>{label}</label>
      { passwordStrength && (<span className={classNames(Styles.strength, passwordStrengthClasses[passwordStrength])}>{passwordStrength}</span>) }
    </div>
  )
}

PasswordInput.PasswordStrengths = passwordStrengths;

PasswordInput.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string
};



export default PasswordInput