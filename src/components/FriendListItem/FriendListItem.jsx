import PropTypes from "prop-types";
import css from "../FriendList/FriendList.module.css";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;

  return (
    <div>
      <img className="img-frieds" src={avatar} alt="avatar" />
      <p className="name-frieds">{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

{
  /* <p className="online-frieds">{isOnline ? "Online" : "Offline"}</p> */
}
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
