import React from "react";
import Carousel from 'better-react-carousel'
import Images from "./Images";

const JurySlider = () =>{

    const sliderImage = {
        height:'200px',
        width:'200px',
        objectFit: 'cover',
        borderRadius:'50px'
    }
    return <div>
       <Carousel cols={3} rows={1} gap={20} loop={true} autoplay={1500}>
      <Carousel.Item>
        <img   style={sliderImage} src={Images.MaliniImg} />
      </Carousel.Item>
      <Carousel.Item>
        <img   style={sliderImage} src={Images.RuchitaImg} />
      </Carousel.Item>
      <Carousel.Item>
        <img  style={sliderImage}  src={Images.SHINYDOSHIImg} />
      </Carousel.Item>
      <Carousel.Item>
        <img  style={sliderImage} src={Images.kirtImg} />
      </Carousel.Item>
      <Carousel.Item>
        <img  style={sliderImage} src={Images.RuchitaImg} />
      </Carousel.Item>
      <Carousel.Item>
        <img style={sliderImage}  src={Images.MaliniImg} />
      </Carousel.Item>
    
    </Carousel>

    </div>
}
export default JurySlider;