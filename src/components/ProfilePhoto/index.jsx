import Avatar from 'components/Avatar';

const ProfilePhoto = ({ cursorPointer, ...props }) => {
  return (
    <Avatar
      round
      containerProps={{
        borderWidth: 0,
        width: 46,
        height: 46,
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
