import React from 'react';
import about from '../img/about.png';

function ImageSection() {
    return (
        <div className="ImageSection">
           <div className='img'>
             <img src={about}></img>  
              </div> 
              <div className="about-info">
                  <h3> I am<span> lorum Ipsum </span></h3>
                  <p className="about-text">Lorum line is vetruy dfreur n jdhuefe nchduer 
                   xhyrbxvxuw'jdhyr mcnheooir nbxreir tnhd dljd get gtersr gersd.
                   Betar Tyhum to Bijahkyot kamytefyab adfhdmi nakhiln rhyho </p>
                   <div className="about-details">
                       <div className ="left-section">
                           <p>Name</p>
                           <p>Phone</p>
                           <p>Address</p>
                       </div>
                       <div className="right">
                       <p>:Shahan Ahmad</p>
                           <p>:0475645351</p>
                           <p>:10 Lorem rd Lorem</p>
                       </div>
                       <button className="btn">Download CV</button>
                       </div> 
                   </div>
              </div>
        
    )
}

export default ImageSection
