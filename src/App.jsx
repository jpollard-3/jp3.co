import React, { Component } from "react";
import { useLocation} from 'react-router-dom';
import Banner from "./components/banner.jsx";
import NavBar from "./components/navbar.jsx";
import UserWindow from "./components/common/UserWindow.jsx";
import "./css/main_new.css";
import "./css/fonts.css";
import "./css/form.css";
import ScrollState from "./components/common/scrollState.jsx";

class App extends Component {


  constructor(props){
    super(props);

    const loca=this.props.loc.pathname;
    let iloc=1;
    switch (loca){

      case "/webdev" :
        iloc=2;
        break;
      case "/media" :
        iloc=3;
        break;
      case "/about" :
        iloc=4;
        break;
      case "/" : 
      default:
          iloc=1;
          break;
    }
    this.state = {
      scroll: false,
      windowWidth: 0,
      topBar: false,
      currentLocation: iloc,
      Pages: [
        {
          id: 1,
          section: "home",
          page: "",
          img: "banner1.jpg",
          displayCaption: true,
          imgLocation: "Kyiv",
        },
        {
          id: 2,
          section: "webdev",
          page: "webdev",
          img: "banner2.jpg",
          displayCaption: false,
          imgLocation: "Kyiv",
        },
        {
          id: 3,
          section: "media",
          page: "media",
          img: "banner6.jpg",
          displayCaption: false,
          imgLocation: "Kyiv",
          
        },
        {
          id: 4,
          section: "about",
          page: "about",
          img: "tpbg.png",
          displayCaption: false,
          imgLocation: "",
        },
        {
          id: 5,
          section: "media",
          page: "video",
          img: "banner2_4kcomp.jpg",
          //img: "tpbg.png",
          displayCaption: false,
          imgLocation: "Kyiv",
          
        },
      ],
    };


  }
  
  handleResize = (width) => {
    this.setState({ windowWidth: width });
  };

  handleScroll = (scroll) => {
    this.setState({ scroll });
  };

  

  handleNav = (currentLocation) => {
    this.setState({ currentLocation });
    let currentPage;
    this.state.Pages.map((page) => {
      if (page.id === currentLocation) {
        currentPage = page;
        if (currentPage.img === "") {
          this.setState({ topBar: true });
        } else {
          this.setState({ topBar: false });
        }
      }
      return null;
    });
  };


  render() {

    return (
      <main>
        <UserWindow handleResize={this.handleResize} />
        <ScrollState handleScroll={this.handleScroll} />

        <Banner
          Pages={this.state.Pages}
          currentLocation={this.state.currentLocation}
          nodeRef={this.useRef}

        />
        <NavBar
          scroll={this.state.scroll}
          windowWidth={this.state.windowWidth}
          onNav={this.handleNav}
          topBar={this.state.topBar}

        />
      </main>
    );
  }
}

export default App;
