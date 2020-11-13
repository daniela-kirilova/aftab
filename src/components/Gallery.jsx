import React, { Component } from "react";

import { galleryData } from "../helper/galleryData";
import Search from "../components/Search"
export default class Gallery extends Component {
  state = {
    galleryData: galleryData,
                
    
  };

  render() {
    return (
      <section className="gallery">
           
     <Search/>
      </section>
    );
  }
}
