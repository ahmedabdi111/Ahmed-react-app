import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { Tiriye } from "./components/Counter";
import ThemeToggle from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";
import UserList from "./components/UserList";
import NameForm from "./components/Nameform";
import UncontrolledInput from "./components/UncontrolledInput"

function App() {
  return (
    <>
      <NameForm />
      <ThemeToggle />
      <UncontrolledInput />
      <Header />
      <UserList />
      <Notification hasNewMessages = {true} />
      <Dashboard isLoggedIn={true} />
      <Inputer />
      <Greeting name="Abdullahi" surname="Dahir" />
      <WelcomeMessage isLoggedIn={true} />
      <Clicker />
      <Greeting name="Abdullahi" surname="Dahir" />
      <Tiriye />
    </>
  );
}

export default App;
