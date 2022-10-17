import Avatar from 'components/Avatar';

const ProfilePhoto = (props) => {
  return (
    <Avatar
      round
      containerProps={{
        borderWidth: 0,
        width: 46,
        height: 46,
      }}
      src=''
      initials={'PC'}
      profileId={5}
      {...props}
    />
  );
};

export default ProfilePhoto;
