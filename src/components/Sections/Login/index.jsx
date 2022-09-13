import Button from 'components/Button';
import UnderlinedText from 'components/UnderlinedText';
import InputContainer from 'components/Form/InputContainer';
import InputGroup from 'components/Form/InputGroup';
import PasswordInput from 'components/Form/PasswordInput';
import TextInput from 'components/Form/TextInput';
import Toggle from 'components/Form/Toggle';
import IconFacebook from 'components/Icons/Facebook';
import IconGoogle from 'components/Icons/Google';
import Welcome from './components/Welcome';
import Styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div className={Styles.container}>
      <Welcome />
      <InputContainer>
        <TextInput label='Email' placeholder='Email' />
      </InputContainer>
      <InputContainer>
        <PasswordInput label='Password' placeholder='Password' />
      </InputContainer>
      <div className={Styles.row}>
        <Toggle label={'Remember Me'} />
        <button className={Styles.forgotLink}>{'Forgot password?'}</button>
      </div>
      <InputGroup>
        <InputContainer style={{ marginBottom: '30px' }}></InputContainer>
        <InputContainer style={{ marginBottom: '30px' }}></InputContainer>
      </InputGroup>
      <div className={Styles.actionsContainer}>
        <Button block>{`Login`}</Button>
        <Button variant={Button.Variants.SECONDARY_OUTLINE} block>
          <IconGoogle className={Styles.icon} />
          {`Login with Google`}
        </Button>
        <Button variant={Button.Variants.SECONDARY_OUTLINE} block>
          <IconFacebook className={Styles.icon} />
          {`Login with Facebook`}
        </Button>
      </div>
      <div>
        {`Don't have an account?`}
        <button className={Styles.signupLink} onClick={() => navigate('/signup')}>
          <UnderlinedText>{'Signup for free'}</UnderlinedText>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
