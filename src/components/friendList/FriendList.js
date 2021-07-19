import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default.jpg";
import styles from "./FriendsList.module.css";

const FriendsList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ avatar, id, name, isOnline }) => (
      <li className={styles.item} key={id}>
        <span
          className={isOnline ? styles.statusOnline : styles.statusOffline}
        ></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
    ;
  </ul>
);

FriendsList.defaultProps = {
  avatar: defaultImage,
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isonline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
