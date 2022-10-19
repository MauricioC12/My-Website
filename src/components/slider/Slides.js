import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Project 1",
    desc: "ToDo App",
    site: "https://github.com/MauricioC12/ToDo-React-Project"
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Weather App",
    site: "https://github.com/MauricioC12/React-Weather-App"
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Movies App",
    site: "https://github.com/MauricioC12/Project-API-Rest-JavaScript"
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg",
    alt: "Project 4",
    desc: "Relationship Blog",
    site: "https://github.com/MauricioC12/Relationship-Blog-Project"
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_960_720.jpg",
    alt: "Project 5",
    desc: "Article Component",
    site: "https://github.com/MauricioC12/Article-Preview-Component"
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
    alt: "Project 6",
    desc: "404 Not Found",
    site: "https://github.com/MauricioC12/404-Error-Not-Found"
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <a href={slide.site} target="_blank" rel="noreferrer">{slide.desc}</a>
    </div>
  </div>
));

export default slides;