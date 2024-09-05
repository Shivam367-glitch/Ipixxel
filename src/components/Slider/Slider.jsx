import { Carousel } from 'react-bootstrap';
import SliderCard from './SliderCard';
import {sliderContent} from './sliderContent.json';
const Slider = () => {
  
      

    return (
        <Carousel indicators={false} className='service_slider'>
       {
        sliderContent.map((slider,ind)=>{
        
          return (
            <Carousel.Item key={ind}>
            <SliderCard {...slider} />
            </Carousel.Item>
          )
        })
       }
        </Carousel>
      );
}

export default Slider