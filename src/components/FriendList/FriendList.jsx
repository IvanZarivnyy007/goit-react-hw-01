export default const FriendList = ({ friends }) => {

  return <div>{friends.map(({ avatar, name, isOnline, id }) => (


  ))}
    </div>;
}
