import { Fragment } from "react";
import PhotoCard from "./PhotoCard.jsx";
import PhotoModal from "./PhotoModal.jsx";

function Gallery({ photos, onUsun }) {
  return (
    <div id="galeria" className="row g-4">
      {photos.map((zdjecie) => (
        <Fragment key={zdjecie.id}>
          <div className="col-12 col-md-6 col-lg-4">
            <PhotoCard {...zdjecie} onUsun={() => onUsun(zdjecie.id)} />
          </div>
          <PhotoModal {...zdjecie} />
        </Fragment>
      ))}
    </div>
  );
}

export default Gallery;