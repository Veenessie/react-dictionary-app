import React from "react";
import "./Photos.css";

export default function Photos(props) {
  let photos = props.photos;

  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {photos.map(function (photo, index) {
            return (
              <div className="col-4 individual-photo" key={index}>
                <img src={photo.src.landscape} className="img-fluid" alt="" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
