import { Profile } from "./components/Profile/Profile";
// import { user } from "./components/Data/userData.json";
import user from "./components/Data/userData.json";

// import friends from "../friends.json";
// import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
      {/* <FriendList friends={friends} /> */}
      {/*  <TransactionHistory items={transactions} />{" "} */}
    </>
  );
};

export default App;
