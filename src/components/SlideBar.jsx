import React from 'react';
import "./Slidbar.css";

function SlideBar() {
  return (
    <div className="slider">
    <ul className="slider__list">
      <li className="slider__slide"><img src={require("../images/slideBar/ayushman.png")} alt="Slide image number 1 " /></li>
      <li className="slider__slide"><img src={require("../images/slideBar/dig-village.jpg")} alt="Slide image number 2" /></li>
      <li className="slider__slide"><img src={require("../images/slideBar/e-shram.png")} alt="Slide image number 3 " /></li>
      <li className="slider__slide"><img src={require("../images/slideBar/pm-kisan.png")} alt="Slide image number 4 " /></li>
    </ul>
  </div>
  )
}

export default SlideBar