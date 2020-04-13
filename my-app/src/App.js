import React from 'react';
import FriendsList from "./components/FriendList/FriendsList";
import Profile from './components/SocialProfile/Profile';
import Statistic from './components/Statistics/Statistic';
import TransactionsHistory from './components/TransactionHistory/TransactionsHistory';
import friends from './data/friends';
import user from './data/user';
import statistic from './data/statistic';
import transactions from './data/transactions';

const App = () => (
    <>
        <FriendsList friends={friends} />
        <Profile user={user}/>
        <Statistic stats={statistic} title={'Upload stats'}/>
        <TransactionsHistory transactions={transactions}/>
    </>
);

export default App;