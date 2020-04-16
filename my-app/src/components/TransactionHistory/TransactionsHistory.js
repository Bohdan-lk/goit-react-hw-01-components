import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';
import TransactionsHistoryRow from "./TransactionsHistoryRow";

const TransactionsHistory = ({transactions}) => (
    <table className={styles.table}>
        <thead>
        <tr className={styles.headRow}>
            <th className={styles.title}>Type</th>
            <th className={styles.title}>Amount</th>
            <th className={styles.title}>Currency</th>
        </tr>
        </thead>
        <tbody>
        {transactions.map(transaction =>
            <TransactionsHistoryRow transaction={transaction} key={transaction.id}/>)})
        </tbody>
    </table>
);

TransactionsHistory.propTypes = {
    transactions : PropTypes.arrayOf (PropTypes.object).isRequired
};

export default TransactionsHistory;