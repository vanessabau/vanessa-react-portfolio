import Vbio2 from "./vbio2.jpeg";

const BioPic = () => {
  return (
    <>
      <div>
        <div className="preview-shadow">
          <div className="preview-content">
            <img id="profile-pic" src={Vbio2} alt="Vanessa Bautista" />
            <div className="corner corner--tl"></div>
            <div className="corner corner--tr"></div>

            <div className="corner corner--br"></div>
            <div className="corner corner--bl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioPic;
