import Button from '@components/Button';
import UnderlinedText from '@components/UnderlinedText';
import InputContainer from '@components/Form/InputContainer';
import PasswordInput from '@components/Form/PasswordInput';
import TextInput from '@components/Form/TextInput';
import Toggle from '@components/Form/Toggle';
import IconFacebook from '@components/Icons/Facebook';
import IconGoogle from '@components/Icons/Google';
import Welcome from '@components/Sections/Welcome';
import Styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/invoices');
    }, 550);
  };

  return (
    <div className={Styles.container}>
      <Welcome
        title={'Welcome Back'}
        description={'Enter your Seed Platform credentials and start growing your business.'}
      />
      <InputContainer>
        <TextInput label='Email' placeholder='Email' />
      </InputContainer>
      <InputContainer>
        <PasswordInput label='Password' placeholder='Password' />
      </InputContainer>
      <div className={Styles.row}>
        <Toggle label={'Remember Me'} />
        <button className={classNames(Styles.link, Styles.forgotLink)}>{'Forgot password?'}</button>
      </div>
      <div className={Styles.actionsContainer}>
        <Button onClick={handleLogin} isBusy={isLoading} block>{`Sign in`}</Button>
        <Button variant={Button.Variants.SECONDARY_OUTLINE} block>
          <IconGoogle className={Styles.icon} />
          {`Sign in with Google`}
        </Button>
        <Button variant={Button.Variants.SECONDARY_OUTLINE} block>
          <IconFacebook className={Styles.icon} />
          {`Sign in with Facebook`}
        </Button>
      </div>
      <div>
        {`Don't have an account?`}
        <button className={classNames(Styles.link, Styles.signupLink)} onClick={() => navigate('/signup')}>
          <UnderlinedText>{'Signup for free'}</UnderlinedText>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
