import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks";
import About from "./About";
import Welecome from "./Welecome";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";


class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            {isAuthenticated && <Route exact path="/" element={<BestBooks />}></Route>}
            {!isAuthenticated && <Route exact path="/" element={<Welecome />}></Route>}
            <Route exact path="/about" element={<About />}></Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
