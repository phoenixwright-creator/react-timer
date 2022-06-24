import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Timer sessionTime="5" breakTime="3" />
    </div>
  );
}

export default App;
