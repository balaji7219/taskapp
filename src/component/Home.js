import React from "react";
import { Carousel, Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Carousel style={{ marginBottom: "20px" }}>
        <Carousel.Item>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={"assets/img/3.jpg"}
            alt="First slide"
          />

          <Carousel.Caption className="text-dark">
            {" "}
            Bts e-Commerce
          </Carousel.Caption>
        </Carousel.Item>
    
   
        <Carousel.Item>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src={"assets/img/5.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
            Bts e-Commerce
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </>
  );
};

export default Home;
