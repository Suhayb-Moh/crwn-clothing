import Homepage from "./pages/homepage/Homepage.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const Hatpages = () => (
  <div>
    <h1>Hats Pages</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hatpages} />
      </Switch>
    </div>
  );
}

export default App;
