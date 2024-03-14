import{ PropTypes} from "prop-types";
import {css} from "./Profile.module.css"

export const Profile ({username, tag, location, stats,avatar }) => {
  return (
    <div>
      
      <div>
        <img src={avatar} alt="Useravatar" />
        <p>{username}</p> <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
      <span>Followers</span> <span> {stats.Followers}</span>
        </li>
        
        <li>
          <span>Views</span> <span> {stats.Views}</span>
        </li>
        
        <li>
          <span>Likes</span><span> {stats.Likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
