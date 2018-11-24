import React, { Component } from "react";
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import Main from "./componenets/main";
import { BrowserRouter } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";

class App extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="fade-in"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <BrowserRouter>
          <div className="App">
            <div className="container-fluid">
              <div className="container">
                <Header />
                <Main />
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </CSSTransitionGroup>
    );
  }
}

export default App;
