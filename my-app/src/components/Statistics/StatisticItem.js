import React     from 'react';
import PropTypes from 'prop-types';
import styles    from "./StatisticItem.module.css";

function StatisticItem(props) {
    let {stat} = props;
    const randColor = () => "HSL(" + 360 * Math.random() + ',' + (30 + 80 * Math.random()) + '%,' + (40 + 70 * Math.random()) + '%)';

    return (
        <li style={{backgroundColor : randColor()}} className={styles.item}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percent}>{stat.percentage}%</span>
        </li>
    )
}

StatisticItem.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
};

export default StatisticItem;