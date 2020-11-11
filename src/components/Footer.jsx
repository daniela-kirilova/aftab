import React, { Component } from "react";
import Instagram from "../images/insta.png";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-icons">
            <i className="icon-phone">09143116058</i>
          </div>

          <a className="insta" href="https://www.instagram.com/?hl=en">
            <img src={Instagram}></img>
          </a>

        
          <div className="footer-icons">
            <i className="icon-phone">04132889199</i>
          </div>
        </div>
      </footer>
    );
  }
}
