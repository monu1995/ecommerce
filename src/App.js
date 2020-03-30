import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

const Hats = (props) => {
  console.log(props);
  
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
