import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Navbar from "./Components/Navbar";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";
import useFetch from "./api/useFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { data: blogs } = useFetch("http://localhost:8000/blogs");
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
              <Update blogs={blogs}/>
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
