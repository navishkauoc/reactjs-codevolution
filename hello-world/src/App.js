import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" />
      <Greet name="Clark" />
      <Greet name="Diana" />
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
