import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <div className={css.container}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} width="350" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}> {stats.Followers}</span>
        </li>

        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}> {stats.Views}</span>
        </li>

        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}> {stats.Likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
