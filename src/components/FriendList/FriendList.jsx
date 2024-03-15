import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <div className="contsiner-frieds">
      <ul className="ul-frieds">
        {friends.map((friend, index) => (
          <li className="li-frieds" key={index}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
