import Styles from './OverviewSlides.module.scss';

const OverviewSlides = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>{`Design for your business needs`}</h1>
      <p className={Styles.description}>{`See the analytics and grow your business remotely, from anywhere.`}</p>
    </div>
  );
};

export default OverviewSlides;
