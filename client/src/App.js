import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Home from "./components/Pages/Home";
import Saved from "./components/Pages/Saved"
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        {/* <Route component={NoMatch}/> */}
      </Switch>
    </div>
  </Router>
);

export default App;
