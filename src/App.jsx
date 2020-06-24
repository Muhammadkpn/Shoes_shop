import React from "react";

import NavbarMaterial from "./components/navbar";
import { Route } from "react-router-dom";
import MultipleItems from "./components/carousel";
import CarouselBar from "./components/carousel";
import HomePage from "./pages/homepage";
import Category from "./pages/category";
import Profile from "./pages/profile";

// import Home from "./pages/home";
// import PageOne from "./pages/page-1";



class App extends React.Component {
  render() {
    return (
      <div>
          <Route>
            <NavbarMaterial/>
            <Route path="/" component={HomePage} exact/>
            <Route path="/category" component={Category} />
            <Route path='/profile' component={Profile} />
          </Route>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
