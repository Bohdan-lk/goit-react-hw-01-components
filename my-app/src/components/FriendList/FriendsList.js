import React from 'react';
import FriendsListItem from './FriendsListItem';
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

export default FriendsList;