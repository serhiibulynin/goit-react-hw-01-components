import React from "react";
import PropTypes from "prop-types";

import styles from "./FriendsList.module.css";
import FriendsItem from "./FriendsItem";

const FriendsList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map((friends) => (
      <FriendsItem key={friends.id} friends={friends} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default FriendsList;
