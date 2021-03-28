import Home from './Home';
import Navbar from './Navbar';
function App() {
  // you can write any javascript syntax here

  return (
    <div className="App">
      <Navbar /> 
      <div className="content">
          <Home />
      </div>
    </div>
  );
}

export default App;
