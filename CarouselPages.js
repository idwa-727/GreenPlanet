import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CarouselPages.css';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img0 from './images/img0.jpg';

function CarouselPages() {
  const navigate = useNavigate();

  const handleBookServicesClick = () => {
    navigate('./Services/gardening'); // Navigate to the services page
  };

  const handleShopNowClick = () => {
    navigate('./Products/plants'); // Navigate to the products page
  };

  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            style={{ height: '90vh' }}
            className="d-block w-100"
            src={img0}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Welcome To GreenPlanet</h5>
            <p>Our goal is to provide you the best products and services for your Gardens and Agriculture Sites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '90vh' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Shop Now</h5>
            <p>Explore a variety of gardening tools and plants.</p>
            <button className="shop-now-btn" onClick={handleShopNowClick}>
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '90vh' }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Book Services</h5>
            <p>Need gardening or agriculture services? Book now!</p>
            <button className="book-services-btn" onClick={handleBookServicesClick}>
              Book Services
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPages;


