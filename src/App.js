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
                  <img src={process.env.PUBLIC_URL + "/4.jpg"} alt="My-Pic" className='image' width="" />
              </Carousel.Item>
              <Carousel.Item>
                  <img src={process.env.PUBLIC_URL + "/5.jpg"} alt="My-Pic" className='image' width="" />
              </Carousel.Item>
              <Carousel.Item>
                  <img src={process.env.PUBLIC_URL + "/6.jpg"} alt="My-Pic" className='image' width="" />
              </Carousel.Item>
            
          </Carousel>
      </>
    )
  }
}
