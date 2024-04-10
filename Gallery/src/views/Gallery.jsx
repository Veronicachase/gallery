import { useGalleryContext } from "../contexts/GalleryContext";
import "../styles/gallery.css";

export function Gallery() {
  const { changeCategory } = useGalleryContext();
  return (
    <div>
      <button className="boton" onClick={() => changeCategory("flores")}>
        Flores
      </button>
      <button className="boton" onClick={() => changeCategory("animales")}>
        Animales
      </button>
      <button className="boton" onClick={() => changeCategory("paisaje")}>
        Paisaje
      </button>
    </div>
  );
}
