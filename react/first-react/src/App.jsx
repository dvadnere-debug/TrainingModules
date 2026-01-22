import Student from "./components/Students";
import UserGreeting from "./components/UserGreeting.jsx";
import List from "./components/List.jsx";
import Button from "./components/Button.jsx";
function App() {
  return (
    <div className="student">
      <Button />

      <List />
      <UserGreeting isLoggedIn={true} username="Barcelona00" />

      <Student name="Chewbacca" age={30} isStudent={true} />

      <Student name="R2D2" age={15} isStudent={false} />

      <Student name="Megatron" age={40} isStudent={false} />

      <Student name="tony" age={20} isStudent={true} />

      <Student name age />
    </div>
  );
}

export default App;
