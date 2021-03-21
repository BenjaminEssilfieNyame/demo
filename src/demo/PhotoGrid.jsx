import FileSelection from "./FileSelection";
import Photos from "./Photos";
import "./PhotoGrid.css";
import { useState } from "react";

const PhotoGrid = () => {
  const [images, setImages] = useState([]);

  return (
    <div className="photo-grid">
      <div className="photo-grid-heading">
        <h1>GRID PHOTOS</h1>
      </div>
      <Photos images={images} />
      <FileSelection images={images} setImages={setImages} />
    </div>
  );
};

export default PhotoGrid;
