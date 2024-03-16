import PropTypes from "prop-types";
// import { css } from "../FriendList/";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  return (
    <div>
      <img className="img-frieds" src={avatar} alt="avatar" />
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
