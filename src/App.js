import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Aboutus from "./pages/Aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import detailGallery from "./pages/detailGallery";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Regis" component={Register} />
        <Route exact path="/Aboutus" component={Aboutus} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/Help" component={Help} />
        <Route exact path="/DetailGallery" component={detailGallery} />
      </Switch>
    </Router>
  );
}

export default App;
