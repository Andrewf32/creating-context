import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./navigation/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "../styles/app.scss";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Route path="/" component={Navbar} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
