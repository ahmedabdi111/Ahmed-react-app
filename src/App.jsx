import './App.css';
import Greeting from './components/Greeting';
import Header from './components/Header'; // Fixed the case
import {Tiriye} from './components/Counter';
import ThemeSwitch from "./components/ThemeSwitch"
import Clicker from './components/Clicker';
import Inputer from './components/Inputer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <>
      <WelcomeMessage isLoggedIn={false} />
      <ThemeSwitch />
      
      <Header />
      <Inputer />
      <Greeting name="Ahmed" surname="Ali" />
      <Tiriye />
      <Clicker />
      <Greeting name="Ahmed" surname="Ali" />
      <WelcomeMessage isLoggedIn={true} />
    </>
  );
}

export default App;
