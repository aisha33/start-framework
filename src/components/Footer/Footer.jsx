
import React from 'react'
import { IconBase } from 'react-icons'
import { FaFacebook,FaTwitter,FaLinkedin    } from 'react-icons/fa'
import { TbWorld } from "react-icons/tb";





export default function Footer() {
  return (
    <>
   <div className="bg-light pt-5">
    <div className="container ">
      <div className="row d-flex justify-content-center justify-content-between mb-4 text-center">
        <div className="col-md-3 col-sm-6 ">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
          <div className="col-md-3 col-sm-6">
          <h3>AROUND THE WEB</h3>
          <div className="d-flex flex-row align-items-center justify-content-center p-2">
          <div className="border border-dark rounded p-1 m-2">  <FaFacebook  /></div>
       <div className="border border-dark rounded p-1 m-2"><FaTwitter  /></div> 
         <div className="border border-dark rounded p-1 m-2"><FaLinkedin /></div> 
          <div className="border border-dark rounded p-1 m-2"><TbWorld /></div> 
          </div>  
          <div>
          </div>
        </div>
          <div className="col-md-3 col-sm-6">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
     
      </div>
      
   
 <div className="bg-dark text-light p-2">
        <p className="text-center ">
     
            Copyright © Your Website 2021
       
        </p>
   </div>
 </div>
</>
  )
}
