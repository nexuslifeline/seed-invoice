import Styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <h1>{`Welcome Back`}</h1>
      <p>{`Enter your Seed Platform credentials and start growing your business.`}</p>
    </div>
  );
};

export default Welcome;
