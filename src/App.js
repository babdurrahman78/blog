import Home from "./Components/Home";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import BlogDetails from "./Components/BlogDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // you can write any javascript syntax here

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
