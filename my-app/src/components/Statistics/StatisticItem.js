import React     from 'react';
import PropTypes from 'prop-types';
import styles    from "./StatisticItem.module.css";

class StatisticItem extends React.Component {
    render() {
        let {stat} = this.props;
        const randColor = () => "HSL(" + 860 * Math.random() + ',' + (35 + 95 * Math.random()) + '%,' + (70 + 20 * Math.random()) + '%)';

        return (
            <li style={{backgroundColor: randColor()}} className={styles.item}>
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percent}>{stat.percentage}%</span>
            </li>
        )
    }
}

StatisticItem.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
};

export default StatisticItem;