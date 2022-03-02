import Homepage from "./pages/homepage/Homepage.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/ShopPage.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
