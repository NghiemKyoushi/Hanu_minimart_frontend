import React from 'react';
import './slide.component.css'
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

// update nào 
const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};
const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <img src= 'https://vnreview.vn/image/21/74/38/2174384.jpg?t=1614743680399' alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src='https://image.bnews.vn/MediaUpload/Org/2021/01/15/314ccfb4-153b-4574-b5e1-239ad5a4d276.jpeg' alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src='https://imagevietnam.vnanet.vn/Upload/2016/7/19/1907201609521574-30_resize.jpg' alt="img3" />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;