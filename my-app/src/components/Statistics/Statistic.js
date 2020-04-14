import React         from 'react';
import PropTypes     from 'prop-types';
import styles        from './Statistic.module.css';
import StatisticItem from './StatisticItem';

function Statistic(props) {
    let {title, stats} = props;
    return (
        <section className={styles.statistics}>
            {title ? (
                <h2 className={styles.title}>{title}</h2>
            ) : ('')}
            <ul className={styles.list}>
                {stats.map( stat => (
                    <StatisticItem stat={stat} key={stat.id}/>
                ) )}
            </ul>
        </section>
    );
}

Statistic.propTypes = {
    title : PropTypes.string,
    stats : PropTypes.array.isRequired,
};

export default Statistic;