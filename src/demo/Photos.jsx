import "./Photos.css";

const Photos = ({ images }) => {
  return (
    <div id="photo" className="split display-left">
      <div className="grid-display">
        {images.map((image, index) => {
          return <img key={index} src={image} alt="Yo!" />;
        })}
      </div>
    </div>
  );
};

export default Photos;
