import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from './../images/slider2.jpg'


const Slider = () => {
  return (
    <div> <Carousel fade={true} pause={false}>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Improving Productivity</h3>
        <p>The first benefit of employee management system is improving productivity.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Reducing Liability</h3>
        <p>Employee management system also helps reduce liability for your business</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Increased Employee Engagement</h3>
        <p>Employee management system is an effective way to manage employees and keep them engaged with their work..</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Slider