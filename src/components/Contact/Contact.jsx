import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'
import "./Contact.css"

export default function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="p-5 m-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-3">CONTACT US</h2>
         <div className="d-flex justify-content-center align-items-center mb-4">
                 <div className="line bg-dark"></div>
                  <div className='star m-2'><FaStar/></div>
                 <div className="line bg-dark"></div>
               </div>
       
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* create form */}
            <form onSubmit={handleSubmit}>
  <div className={`form-group mb-3 ${formData.name ? "active" : ""}`}>
    <input
      type="text"
      className="form-control"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder=""
      required
    />
    <label>Name</label>
  </div>

  <div className={`form-group mb-3 ${formData.email ? "active" : ""}`}>
    <input
      type="email"
      className="form-control"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder=""
      required
    />
    <label>Email</label>
  </div>

  <div className={`form-group mb-3 ${formData.message ? "active" : ""}`}>
    <textarea
      className="form-control"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder=""
      rows="5"
      required
    />
    <label>Message</label>
  </div>

  <button type="submit" className="btn btn-primary w-100">
    Send Message
  </button>
</form>

        
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
