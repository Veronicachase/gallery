import React from "react";
import "./App.css";

import { GalleryContextProvider } from "./contexts/GalleryContext";
import { Gallery } from "./views/Gallery";
import { GalleryDisplay } from "./components/GalleryDisplay";

function App() {
  return (
    <GalleryContextProvider>
      <GalleryDisplay />
      <Gallery />
    </GalleryContextProvider>
  );
}

export default App;
