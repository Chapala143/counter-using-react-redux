import Counter from './components/counter';
import './App.css';

function App() {
  return (
    <div className="App">
    <Counter delta={1} label={"Counter with delta 1 "}/>
  </div>
  );
}

export default App;
