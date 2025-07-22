import React, { Component } from "react";

import MenuMover from "./menuMover.jsx";

class NavBar extends Component {
  state = { className: "topnav" };

  handleBurger = (e) => {
    e.preventDefault();
    let className;
    if (this.state.className === "topnav") {
      className = "topnav responsive";
    } else {
      className = "topnav";
    }
    this.setState({ className });
  };

  handleSmalls = () => {
    let className;
    if (this.state.className === "topnav responsive") {
      className = "topnav";
    } else {

      className = this.state.className;
    }
    this.setState({ className });
  };

  render() {
    const { onNav, topBar, windowWidth, scroll } = this.props;
    let brandingClass = "branding";

    if (topBar === true) {
      brandingClass += " topbar";
    } else {
      brandingClass = "branding";
    }

    return (
      <React.Fragment>
        <MenuMover
          scroll={scroll}
          windowWidth={windowWidth}
          brandingClass={brandingClass}
          className={this.state.className}
          handleSmalls={this.handleSmalls}
          handleBurger={this.handleBurger}
          onNav={onNav}
        />
      </React.Fragment>
    );
  }
}

export default NavBar;

