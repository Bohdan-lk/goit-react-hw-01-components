import React               from 'react';
import PropTypes, {string} from 'prop-types';
import styles              from "./TransactionsHistoryRow.module.css";

const TransactionsHistoryRow = ({transaction}) => (
    <tr className={styles.textRow}>
        <td className={styles.text}>{transaction.type}</td>
        <td className={styles.text}>{transaction.amount}</td>
        <td className={styles.text}>{transaction.currency}</td>
    </tr>
);

TransactionsHistoryRow.propTypes = {
    transaction: PropTypes.shape({
        type: string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired
};

export default TransactionsHistoryRow;