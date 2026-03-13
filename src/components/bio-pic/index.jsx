import React from "react";
import Vbio2 from "./vbio2.jpeg";

const BioPic = () => {
  return (
    <>
      <div>
        <div id="preview-shadow">
          <div id="preview">
            <img id="profile_pic" src={Vbio2} alt="bio_pic" />
            <div id="corner-tl" className="corner"></div>
            <div id="corner-tr" className="corner"></div>

            <div id="corner-br" className="corner"></div>
            <div id="corner-bl" className="corner"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioPic;
