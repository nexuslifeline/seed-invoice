import Menu from 'components/Menu';
import Profile from 'components/Sidebar/components/Profile';
import ProfilePhoto from 'components/ProfilePhoto';

const ProfileMenu = () => {
  return (
    <Menu>
      <Menu.Button as={'div'}>
        <ProfilePhoto isOnline />
      </Menu.Button>
      <Menu.Items direction='top-right' as={'div'}>
        <Profile />
      </Menu.Items>
    </Menu>
  );
};

export default ProfileMenu;
