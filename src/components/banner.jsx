import React, { Component } from "react";
import { CaptionFader, Fader2} from "./fader.jsx";

import { siteURL } from "./common/branding.jsx";


class Banner extends Component {
  
  render() {


    const { Pages, currentLocation } = this.props;


    const pages = [...Pages];

    let currentPage;
    pages.map((page) => {
      if (page.id === currentLocation) {
        currentPage = page;

      } 
      return null;
    }); 

 

    const bi = siteURL+"/imgs/" + currentPage.img;
    let eraser;

    if (currentPage.img === "tpbg.png") {

       eraser=true;
    } else {

       eraser=false;
    }
      return (
        
        <React.Fragment>
            

            <Fader2 cap={currentPage.displayCaption} src={bi} cl={currentLocation} cpi={currentPage.img} eraser={eraser} />
            <CaptionFader in={currentPage.displayCaption} cpiL={currentPage.imgLocation}  />

         
        </React.Fragment>
      );
  }
}

export default Banner;
