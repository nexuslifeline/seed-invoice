import Button from 'components/Button';
import UnderlinedText from 'components/UnderlinedText';
import InputContainer from 'components/Form/InputContainer';
import PasswordInput from 'components/Form/PasswordInput';
import TextInput from 'components/Form/TextInput';
import Toggle from 'components/Form/Toggle';
import IconFacebook from 'components/Icons/Facebook';
import IconGoogle from 'components/Icons/Google';
import Welcome from './components/Welcome';
import Styles from './Login.module.scss';

const LoginForm = (props) => {
  return (
    <div className={Styles.container}>
      <Welcome />
      <InputContainer>
        <TextInput label='Email' placeholder='Email' />
      </InputContainer>
      <InputContainer>
        <PasswordInput label='Password' placeholder='Password' />
      </InputContainer>
      <InputContainer style={{ marginBottom: '30px' }}>
        <Toggle label={'Remember Me'} />
      </InputContainer>
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
        <a href='#' className={Styles.signupLink}>
          <UnderlinedText>{'Signup'}</UnderlinedText>
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
