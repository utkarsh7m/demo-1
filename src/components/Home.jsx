import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import vg from "../images/1.1.webp";
import vg2 from "../images/1.2.webp";
import vg3 from "../images/1.3.webp";
import "./App.css";
export default function App() {
   const sliderImages = [ 
      {
         url: vg,
      },
      {
         url: vg2,
      },
      {
         url: vg3,
      },
   ];
   const [activeImageNum, setCurrent] = useState(0);
   const length = sliderImages.length;
   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };
   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }
   return (
      <div>
         <section className = "image-slider">
            <div class = "left">
               <ArrowBackIosIcon onClick = {prevSlide} />
            </div>
            <div class="right"> 
               <ArrowForwardIosIcon onClick = {nextSlide} />
            </div>
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
                  </div>
               );
            })}
         </section>
      </div>
   );
}