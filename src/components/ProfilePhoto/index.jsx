import Avatar from 'components/Avatar';

const ProfilePhoto = ({ cursorPointer, size = 46, ...props }) => {
  return (
    <Avatar
      round
      containerProps={{
        borderWidth: 0,
        width: size,
        height: size,
        cursor: cursorPointer ? 'pointer' : 'default',
      }}
      src=''
      initials={'PC'}
      profileId={5}
      {...props}
    />
  );
};

export default ProfilePhoto;
