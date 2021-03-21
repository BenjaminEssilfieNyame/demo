import "./FileSelection.css";

const FileSelection = (props) => {
  const handleOnChange = (e) => {
    e.preventDefault();

    function readMultiFiles(files) {
      let reader = new FileReader();
      function readFile(index, images = []) {
        if (index >= files.length) {
          props.setImages(props.images.concat(images));
          return;
        }
        let file = files[index];
        reader.onload = () => {
          let image = reader.result;
          images.push(image);
          readFile(index + 1, images);
        };
        reader.readAsDataURL(file);
      }
      readFile(0);
    }
    readMultiFiles(e.target.files);
  };

  return (
    <div className="split display-right">
      <div className="content-spacing">
        <div className="text-display">
          <p>
            Select photos to be displayed in grid. Nicpe photos for grid
            display.
          </p>
        </div>
        <div id="input-position">
          <input
            type="file"
            name="image-grid"
            multiple
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FileSelection;
