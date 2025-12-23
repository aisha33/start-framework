import React from 'react'
import { FaStar } from "react-icons/fa";
import img from "../../assets/images/girl.png"
import './Home.css'


export default function Home() {
  return (
    <>
     <div className="p-5 mt-5  bacg">
      <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center ">
        <div className="image">
          <img src={img} />
        </div>
        <div className='inform'><h1>start Framework</h1></div>
    
          <div className="d-flex justify-content-center align-items-center mb-2">
                   <div className="line bg-dark"></div>
                    <div className=' star m-2'><FaStar/></div>
                   <div className="line bg-dark"></div>
                 </div>
         
          <div className='text'>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
    </div>
    </div>
    </div>
   
    </>
  )
}
