import React from "react";
import { useGalleryContext } from "../contexts/GalleryContext";
import tulipan from "../assets/images/tulipan.webp";
import cerezo from "../assets/images/cerezo.webp";
import leon from "../assets/images/leon.webp";
import delfines from "../assets/images/delfines.webp";
import paisaje from "../assets/images/paisaje.webp";

const gallery = [
  {
    id: 1,
    name: "Tulipan",
    category: "flores",
    url: tulipan,
  },
  {
    id: 2,
    name: "Cerezos",
    category: "flores",
    url: cerezo,
  },
  {
    id: 3,
    name: "Delfines",
    category: "animales",
    url: delfines,
  },
  {
    id: 4,
    name: "Leon",
    category: "animales",
    url: leon,
  },
  {
    id: 5,
    name: "Paisaje Colorido",
    category: "paisaje",
    url: paisaje,
  },
];
export function GalleryDisplay() {
  const { selectedCategory } = useGalleryContext();
  return (
    <>
      <h2>My Gallery</h2>
      <div className="wrapper">
        {gallery
          .filter((item) => item.category === selectedCategory)
          .map((item) => (
            <div className="container" key={item.id}>
              <img className="image" src={item.url} alt="item.name" />
              <h5>{item.name}</h5>
            </div>
          ))}
      </div>
    </>
  );
}
