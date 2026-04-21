import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar username="Huy"/>
      <header className="App-header">
        
        <Home Title="Rookies" />
        
      </header>
    </div>
  );
}

export default App;
