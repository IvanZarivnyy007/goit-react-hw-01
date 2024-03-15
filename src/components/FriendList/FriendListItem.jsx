import PropTypes from "prop-types";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  return (
    <div className="container-frieds-list">
      <img className="img-frieds" src={avatar} alt="avatar" width="48" />
      <p className="name-frieds">{name}</p>
      <p className="online-frieds">{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
