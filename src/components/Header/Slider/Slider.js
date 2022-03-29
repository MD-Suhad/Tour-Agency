import React from "react";
import { Carousel } from "react-bootstrap";

/* ths is the carousel, which is used in home component  */
const Slider = () => {
  return (
    <div className="w-75 m-auto border">
      <Carousel className="bg-transparent">
        <Carousel.Item interval={5000}>
          <img
           style={{height:'620px'}}
            className=" d-block w-100 mx-auto rounded border border-success"
            src="https://media.istockphoto.com/photos/happy-family-enjoying-picnic-and-camping-holiday-in-countryside-picture-id1272609527?s=612x612"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
           style={{height:'620px'}}
            className=" d-block w-100 mx-auto rounded border border-success"
            src="https://images.unsplash.com/photo-1607623618478-384d71c091d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
          style={{height:'620px'}}
            className="d-block w-100 mx-auto rounded border border-success"
            src="https://images.unsplash.com/photo-1630450225954-c7cf1ae533f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80620px"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>  
      </Carousel>
    </div>
  );
};

export default Slider;
