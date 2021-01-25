import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Slider = () => (
    <Carousel
  plugins={['arrows']}
>
  <img src='./Images/heroHome.jpeg' />
  <img src="./Images/heroHome.jpeg" />
  <img src='./Images/heroHome.jpeg' />
</Carousel>
);

export default Slider