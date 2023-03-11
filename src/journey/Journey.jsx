import React from "react";
import "./journey.css";
import image1 from "../image/Carmel.jpg";
import image2 from "../image/Yosemite.JPG";
import image3 from "../image/snow.jpg";
import image4 from "../image/Ninhbinh.JPG";

const data = [
  { id: 1, image: image1, title: "Carmel", link: "https://pointlobos.org" },
  {
    id: 2,
    image: image2,
    title: "Yosemite",
    link: "https://www.nps.gov/yose/index.htm",
  },
  {
    id: 3,
    image: image3,
    title: "South Lake Tahoe",
    link: "https://visitlaketahoe.com/",
  },
  {
    id: 4,
    image: image4,
    title: "Ninh Binh - Vietnam",
    link: "https://vietnam.travel/places-to-go/northern-vietnam/ninh-binh",
  },
];
const Journey = () => {
  return (
    <section id="journey">
      <h5>Photos taken</h5>
      <h2>My Journey</h2>
      <p className="journey__text">
        I enjoy biking, hiking, walking, and traveling to capture stunning
        pictures of different locations. It helps me maintain a positive mood. I
        feel fortunate to have visited some of the most breathtaking places in
        the United States and Vietnam. Let's explore with me.
      </p>

      <div className="journey__container">
        {data.map(({ id, image, title, link }) => {
          return (
            <article key={id} className="journey__item">
              <a href={link}>
                <div className="journey__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 className="journey__item-title">{title}</h3>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;
