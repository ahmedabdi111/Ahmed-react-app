// App.jsx or App.js
import './App.css';
import Greeting from './components/Greeting';
import Header from './components/header';
import Counter from './components/counter';


function App() {
  return (
    <>
      <Header />
      <Greeting name="Ahmed" surname="Ali"/>
      
      <Counter/>

    </>
  );
}

export default App;
