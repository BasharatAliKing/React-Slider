import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
          <Carousel>
              <Carousel.Item>
                  <img src={process.env.PUBLIC_URL + "/1.avif"} alt="My-Pic" width="100%" />
              </Carousel.Item>
              <Carousel.Item>
                  <img src={process.env.PUBLIC_URL + "/2.avif"} alt="My-Pic" width="100%" />
              </Carousel.Item>
              <Carousel.Item>
                  <img src={process.env.PUBLIC_URL + "/3.avif"} alt="My-Pic" width="100%" />
              </Carousel.Item>
            
          </Carousel>
      </>
    )
  }
}
