import React, { Component } from "react";
import CardGallery from "../components/CardGallery";
import { galleryData } from "../helper/galleryData";
import Search from "../components/Search"
export default class Gallery extends Component {
  state = {
    galleryData: galleryData,
    title: ""                
    
  };

  render() {
    return (
      <section className="gallery">
                  <h1 className='galleryHeading'>here u can find some of our products</h1>
   
     <Search/>
      </section>
    );
  }
}
