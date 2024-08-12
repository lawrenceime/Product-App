declare module 'react-slick' {
    import { ComponentType } from 'react';
  
    interface SliderProps {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      [key: string]: any; // Allow additional props
    }
  
    const Slider: ComponentType<SliderProps>;
    export default Slider;
  }
  