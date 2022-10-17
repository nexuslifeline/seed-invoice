import ProfilePhoto from 'components/ProfilePhoto';
import Styles from './Profile.module.scss';
import Text from 'components/Text';
import Button from 'components/Button';

const Profile = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <ProfilePhoto />
        <div className={Styles.profile}>
          <Text size={'md'}>{'Paul Christian Rueda'}</Text>
          <Text variant='description'>{'Administrator'}</Text>
        </div>
      </div>
      <div className={Styles.body}>
        <Button variant={Button.Variants.SECONDARY_OUTLINE} block>
          {'Log out'}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
