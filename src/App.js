import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Navbar from "./Components/Navbar";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // you can write any javascript syntax here

  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/update/:id">
              <Update />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
