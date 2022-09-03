import Rectangle from 'components/Shapes/Rectangle';

const RectangleGroup = () => {
  return (
    <>
      <Rectangle top='-100px' left='0' transform='rotate(-50deg)' />
      <Rectangle top='400px' right='-500px' transform='rotate(39deg)' />
      <Rectangle top='550px' right='200px' transform='rotate(-26deg)' />
    </>
  );
};

export default RectangleGroup;
