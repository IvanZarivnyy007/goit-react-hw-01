import { Profile } from "./components/Profile/Profile";
import user from "./components/Data/userData.json";

import friends from "./components/Data/friend.json";
import { FriendList } from "./components/FriendList/FriendList";

import transactions from "./components/Data/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      {""}
    </>
  );
};

export default App;
