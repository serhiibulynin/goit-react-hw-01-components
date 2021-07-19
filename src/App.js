import React from "react";
import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import data from "./components/data/data";

function App() {
  return (
    <>
      <div className="App">
        <Profile
          name={data.user.name}
          tag={data.user.tag}
          location={data.user.location}
          avatar={data.user.avatar}
          stats={data.user.stats}
        />
      </div>
      <Statistics title="Upload stats" stats={data.statisticalData} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </>
  );
}

export default App;
