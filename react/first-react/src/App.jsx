// import Student from "./components/Students";
// import UserGreeting from "./components/UserGreeting.jsx";
// import List from "./components/List.jsx";
// import Button from "./components/Button.jsx";
// import MyComponent from "./components/MyComponent.jsx";
// import Counter from "./components/Counter.jsx";
// import CarComp from "./components/CarComp.jsx";
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import { getPosts, getRandomUser } from "./api/index.js";
import { useState, useEffect } from "react";
import PostCard from "./components/PostCard.jsx";
import UserCard from "./components/UserCard.jsx";
import { Movie } from "./components/Movies.jsx";
import { createContext } from "react";
import Understanding_useRef from "./components/Understanding_useRef.jsx";

const BlahblahContext = createContext();
function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((post) => setData(post));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <>
      <Understanding_useRef />
      {/* <BlahblahContext.Provider value={A}></BlahblahContext.Provider> */}
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User</button>

      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}

      {/* <Header />
      <Entry /> */}
      {/* <CarComp />

      <Counter />

      <MyComponent />

      <Button />

      <List />
      <UserGreeting isLoggedIn={true} username="Barcelona00" />

      <Student name="Chewbacca" age={30} isStudent={true} />

      <Student name="R2D2" age={15} isStudent={false} />

      <Student name="Megatron" age={40} isStudent={false} />

      <Student name="tony" age={20} isStudent={true} />

      <Student name age /> */}
    </>
  );
}

export default App;
