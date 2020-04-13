import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

const FriendsListItem = ({friend}) => {
    const isOnClass = friend.isOnline ? styles.isOn : styles.isOff;

    return (
        <li className={styles.item}>
            <span className={isOnClass}>{friend.isOnline}</span>
            <img className={styles.avatars} src={friend.avatar} alt={friend.name}/>
            <p className={styles.name}>{friend.name}</p>
        </li>
    );
} ;

FriendsListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired
};

export default FriendsListItem;