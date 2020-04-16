import React from 'react';
import FriendsListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => (
    friends.length > 0 ? (
        <ul className={styles.list}>
            {friends.map(friend => (
                <FriendsListItem friend={friend} key={friend.id}/>
            ))}
        </ul>
    ) : (
        <p>No friends :(</p>
    )
);

FriendsList.defaultProps = {
    friends: [],
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired
}



export default FriendsList;

