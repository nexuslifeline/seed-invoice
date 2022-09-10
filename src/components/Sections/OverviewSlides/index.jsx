import Slide from './Slide';
import NavDots from './NavDots';
import Carousel from 'nuka-carousel';

const slides = [
  {
    title: 'Design for your business needs',
    description: 'See the analytics and grow your business remotely, from anywhere.',
  },
  {
    title: 'Design for your business needs 1',
    description: 'See the analytics and grow your business remotely, from anywhere 1',
  },
  {
    title: 'Design for your business needs 2',
    description: 'See the analytics and grow your business remotely, from anywhere 2',
  },
];

const OverviewSlides = () => {
  return (
    <Carousel
      renderCenterLeftControls={null}
      renderCenterRightControls={null}
      autoplayInterval={5000}
      renderBottomCenterControls={({ currentSlide, slideCount }) => {
        return <NavDots {...{ currentSlide, slideCount }} />;
      }}
      wrapAround
      autoplay>
      {slides.map(({ title, description }) => (
        <Slide {...{ title, description }} />
      ))}
    </Carousel>
  );
};

export default OverviewSlides;
