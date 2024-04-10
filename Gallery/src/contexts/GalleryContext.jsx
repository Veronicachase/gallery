import { useContext, useState, createContext, Children } from "react";

export const GalleryContext = createContext();

export function useGalleryContext() {
  return useContext(GalleryContext);
}
export function GalleryContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("paisaje");

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <GalleryContext.Provider value={{ selectedCategory, changeCategory }}>
      {children}
    </GalleryContext.Provider>
  );
}
