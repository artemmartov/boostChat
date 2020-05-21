import React from "react";
// import { Button, WhiteBlock } from "./components/index";
import { Auth, Home } from "./pages/index";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path="/im" component={Home} />
    </div>
  );
}

export default App;
