import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../default.jpg";
import styles from "./FriendsList.module.css";

const FriendsItem = ({ friends }) => (
  <li className={styles.item}>
    <span
      className={friends.isOnline ? styles.statusOnline : styles.statusOffline}
    ></span>
    <img
      className={styles.avatar}
      src={friends.avatar}
      alt={friends.name}
      width="48"
    />
    <p className={styles.name}>{friends.name}</p>
  </li>
);

FriendsItem.defaultProps = {
  avatar: defaultImage,
};

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;
