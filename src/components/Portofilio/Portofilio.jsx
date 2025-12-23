import React, { useState }  from "react";
import { FaStar } from 'react-icons/fa'
import img1 from "../../assets/images/round-icons-unsplash.png"
import img2 from "../../assets/images/round-icons.png"
import img3 from "../../assets/images/round-icons3.png"
import img4 from "../../assets/images/toms-stals-unsplash.png"
import img5 from "../../assets/images/publi-unsplash.png"
import img6 from "../../assets/images/unsplash.png"
import "./Portofilio.css"




export default function Portofilio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const items = [
    { id: 1, img: img1},
    { id: 2, img: img2},
    { id: 3, img: img3},
    { id: 4, img: img4},
    { id: 5, img: img5},
    { id: 6, img: img6},
  ];

  return (
    <>
    <div className="py-5 m-5">
      <div className="container">
        {/* Title */}
        <h2 className="text-center fw-bold mb-3">PORTFOLIO</h2>

        {/* Star Divider */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="line bg-dark"></div>
           <div className=' star m-2'><FaStar/></div>
          <div className="line bg-dark"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="portfolio-item position-relative rounded overflow-hidden"  onClick={() => setSelectedImg(item.img)} >
                
                <img
                  src={item.img}
                  className="w-100"
                  alt="portfolio"
                />
                <div className="overlay d-flex justify-content-center align-items-center">
                  <i className="bi bi-plus-lg text-white fs-1"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     {selectedImg && (
  <div className="custom-modal" onClick={() => setSelectedImg(null)}>
    <div
      className="modal-content-custom"
      onClick={(e) => e.stopPropagation()}
    >
      <img src={selectedImg} alt="modal" />
      <button
        className="btn-close-custom"
        onClick={() => setSelectedImg(null)}
      >
        ✕
      </button>
    </div>
  </div>
)}
   </>
  );
}
