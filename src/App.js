import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Help from "./pages/Help";
import addGaleri from "./pages/admin/AddGaleri";
import listEvent from "./pages/ListEvent";
import pernikahan from "./pages/formEvent/Pernikahan";
import ulangTahun from "./pages/formEvent/UlangTahun";
import webinar from "./pages/formEvent/Web";
import Profile from "./pages/Profile";
import Home from "./pages/admin/RequestEO";
import Vendor from "./pages/admin/Vendor";
import FormGaleri from "./pages/admin/FormGaleri";
import FormVendor from "./pages/admin/FormVendor";
import detailUltah from "./pages/admin/DetailUltah";
import detailPernikahan from "./pages/admin/DetailPernikahan";
import detailWebinar from "./pages/admin/DetailWebinar";
import detailGallery from "./pages/detailGallery";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/regis" component={Register} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/detailgallery/:id" component={detailGallery} />
        <Route exact path="/admin" component={Home} />
        <Route exact path="/event" component={listEvent} />
        <Route exact path="/event/pernikahan" component={pernikahan} />
        <Route exact path="/event/ultah" component={ulangTahun} />
        <Route exact path="/event/webinar" component={webinar} />
        <Route exact path="/admin/home" component={Home} />
        <Route exact path="/admin/addgaleri" component={addGaleri} />
        <Route exact path="/admin/addgaleri/form" component={FormGaleri} />
        <Route exact path="/admin/vendor/form" component={FormVendor} />
        <Route exact path="/admin/vendor" component={Vendor} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/admin/webinar/detail/:id"
          component={detailWebinar}
        />
        <Route
          exact
          path="/admin/pernikahan/detail/:id"
          component={detailPernikahan}
        />
        <Route exact path="/admin/ultah/detail/:id" component={detailUltah} />
      </Switch>
    </Router>
  );
}

export default App;
