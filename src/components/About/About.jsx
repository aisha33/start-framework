import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function About() {
  return (
   <>
    <div className="py-5 m-5">
      <div className="container">
    
        <h2 className="text-center fw-bold mb-3">ABOUT COMPONENT</h2>
             <div className="d-flex justify-content-center align-items-center mb-4">
                     <div className="line bg-dark"></div>
                      <div className=' star m-2'><FaStar/></div>
                     <div className="line bg-dark"></div>
                   </div>
           

              <div className='row'>
                <div className='col-md-6 ps-md-5'>
              <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className='col-md-6 ps-md-5'>
              <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div></div>
      </div>
     
      </>
  )
}
